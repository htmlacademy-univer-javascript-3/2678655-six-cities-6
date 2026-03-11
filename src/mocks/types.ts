export type LocationProps = {
  latitude: number,
  longitude: number,
  zoom: number
}
export type CityProps = {
  name: string;
  location: LocationProps;
}

export type OfferProps = {
  id: string,
  title: string,
  type: 'hotel' | 'room' | 'apartment' | 'house';
  price: number,
  previewImage: string,
  city: CityProps,
  location: LocationProps,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number
}

export type Offers = OfferProps[];
