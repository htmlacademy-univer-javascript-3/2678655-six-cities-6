import { Link, generatePath } from 'react-router-dom';
import { Offer } from '../../mocks/types';
import { AppRoute } from '../../const/const';

type PlaceCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function OfferCard({offer, onMouseEnter, onMouseLeave}: PlaceCardProps): JSX.Element {
  const {city, id, previewImage, isPremium, price, isFavorite, rating, title, type } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
        <Link to={generatePath(AppRoute.Offer, { offerId: id })}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={city.name} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/ night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { offerId: id })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
