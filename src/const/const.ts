export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Main = '/',
  Error = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}
