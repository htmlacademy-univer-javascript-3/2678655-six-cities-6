import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { City, Offer, Offers } from '../../mocks/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const/const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  chosenId: Offer['id'] | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({city, offers, chosenId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });
        marker
          .setIcon(
            chosenId !== null && offer.id === chosenId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, chosenId]);

  return <section className="cities__map map" style={{height: '500px', width: '100%'}} ref={mapRef}></section>;
}
