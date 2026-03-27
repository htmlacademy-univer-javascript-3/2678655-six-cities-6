import { SortType } from '../components/sorting/types';
import { Offer } from '../mocks/types';

export const sortOffers = (offers: Offer[], sortType: SortType) => {
  switch(sortType) {
    case 'priceLowToHigh':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'priceHighToLow':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'topRated':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
