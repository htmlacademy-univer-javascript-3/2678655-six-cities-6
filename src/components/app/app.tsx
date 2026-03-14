import { AppRoute, AuthorizationStatus } from '../../const/const';
import { MainPage } from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { PrivateRoute } from '../private-route/private-route';
import { Offers } from '../../mocks/types';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { AuthLayout } from '../layouts/auth-layout/auth-layout';

type AppProps = {
  cityOffersCount: number;
  offers: Offers;
}

export function App({ cityOffersCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            path={AppRoute.Main}
            element={<MainPage offers={offers} cityOffersCount={cityOffersCount} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage offers = {offers} />}
          />
          <Route
            path={AppRoute.Error}
            element={<NotFoundPage />}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>);
}
