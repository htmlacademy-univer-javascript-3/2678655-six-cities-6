import { useSelector } from 'react-redux';
import { OffersList } from '../../components/offers-list/offers-list';
import { getOffers } from '../../store/selectors';
import { Footer } from '../../ui/footer/footer';
import { Heading } from '../../ui/heading/heading';
import { FavoritesEmpty } from '../../ui/favorites-empty/favorites-empty';

export function FavoritesPage(): JSX.Element {
  const offers = useSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className={`page ${favoriteOffers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ? (
            <FavoritesEmpty/>
          ) : (
            <section className="favorites">
              <Heading className="favorites__title">Saved listing</Heading>
              <OffersList variant="favorites" offers={favoriteOffers} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
