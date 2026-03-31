import { createReducer } from '@reduxjs/toolkit';
import { mockOffersList } from '../mocks/mockOffersList';
import { setCity, setOffers, setSortType } from './action';
import { SortType } from '../components/sorting/types';
import { Offers } from '../mocks/types';

type initialStateProps ={
  city: string;
  sortType: SortType;
  offers: Offers;
}

const initialState : initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: mockOffersList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType,(state, action) => {
      state.sortType = action.payload;
    });
});
