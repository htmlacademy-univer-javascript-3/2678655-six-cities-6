import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, requireAuthorization, setCity, setEmail, setError, setOffersDataLoadingStatus, setSortType } from './action';
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
  email: string;
  error: string | null;
}

const initialState : initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: [],
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: ''
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
    })
    .addCase(setEmail,(state, action) => {
      state.email = action.payload;
    })
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    });
});
