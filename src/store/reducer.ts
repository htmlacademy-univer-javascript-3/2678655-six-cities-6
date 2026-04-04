import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, requireAuthorization, setCity, setOffersDataLoadingStatus, setSortType } from './action';
import { SortType } from '../components/sorting/types';
import { Offers } from '../mocks/types';
import { AuthorizationStatus } from '../const/const';
import { AuthStatus } from '../types';

type initialStateProps ={
  city: string;
  sortType: SortType;
  offers: Offers;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthStatus;
}

const initialState : initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType,(state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus,(state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization,(state, action) => {
      state.authorizationStatus = action.payload;
    });
});
