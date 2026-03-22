import { Offer } from '../../mocks/types';
import { FavoritesLocation } from '../../ui/favorites-location/favorites-location';
import { OffersList } from '../offers-list/offers-list';

type FavoritesListProps = {
  favoriteOffers: Offer[];
};

export function FavoritesList({ favoriteOffers }: FavoritesListProps): JSX.Element {
  const uniqueCities = Array.from(
    new Set(favoriteOffers.map((offer) => offer.city.name))
  );

  return (
    <ul className="favorites__list">
      {uniqueCities.map((city) => {
        const currentCityOffers = favoriteOffers.filter(
          (offer) => offer.city.name === city
        );
        return (
          <li className="favorites__locations-items" key={city}>
            <FavoritesLocation city={city} />
            <OffersList offers={currentCityOffers} type="favorites" />
          </li>
        );
      })}
    </ul>
  );
}
