import { memo } from 'react';
import { OfferNearbyList, Offers } from '../../../shared/types';
import { FavoriteCard } from '../../favorites';
import { PageCategoryType } from '../types';
import { OfferCard } from './offer-card';

type OffersListProps = {
  offers: Offers | OfferNearbyList;
  variant?: PageCategoryType;
  setChosenId?: (id: string | null) => void;
};

export const OffersList = memo(({
  offers,
  variant = 'cities',
  setChosenId
}: OffersListProps): JSX.Element => {
  const containerClassName = {
    cities: 'cities__places-list places__list tabs__content',
    favorites: 'favorites__places',
    nearPlaces: 'near-places__list places__list'
  }[variant];

  const handleMouseEnter = (id: string) => {
    setChosenId?.(id);
  };

  const handleMouseLeave = () => {
    setChosenId?.(null);
  };

  if (variant === 'favorites') {
    return (
      <div className={containerClassName}>
        {offers.map((offer) => (
          <FavoriteCard
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={variant === 'cities' ? 'cities' : 'near-places'}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
});

OffersList.displayName = 'OffersList';
