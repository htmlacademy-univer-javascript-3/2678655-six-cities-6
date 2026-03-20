import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { Offers } from '../../mocks/types';
import { Footer } from '../../ui/footer/footer';

type FavoritesPageProps = {
  offers: Offers;
}

export function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoriteOffers={favoriteOffers} />
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
