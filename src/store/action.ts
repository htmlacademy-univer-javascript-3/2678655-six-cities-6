import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../mocks/types';
import { SortType } from '../components/sorting/types';
import { AuthorizationStatus } from '../const/const';

export const setCity = createAction<string>('city/setCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setSortType = createAction<SortType>('sort/setSortType');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setEmail = createAction<string>('user/setEmail');

export const setError = createAction<string | null>('offers/setError');
