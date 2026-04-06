import { State } from './types';

export const getCity = (state: State) => state.city;
export const getOffers = (state: State) => state.offers;
export const getSortType = (state: State) => state.sortType;
export const getLoadingStatus = (state: State) => state.isOffersDataLoading;
export const getAuthStatus = (state: State) => state.authorizationStatus;
export const getEmail = (state: State) => state.email;
export const getError = (state: State) => state.error;

