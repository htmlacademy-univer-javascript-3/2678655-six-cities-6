import { useState } from 'react';
import { Map } from '../../components/map/map';
import { OffersList } from '../../components/offers-list/offers-list';
import { Offer } from '../../mocks/types';
import { LocationsList } from '../../ui/locations-list/locations-list';
import { Heading } from '../../ui/heading/heading';
import { useSelector } from 'react-redux';
import { getCity, getOffers } from '../../store/selectors';


export function MainPage(): JSX.Element{
  const [chosenId, setChosenId] = useState<Offer['id'] | null>(null);
  const currentCity = useSelector(getCity);
  const offers = useSelector(getOffers);
  const offersByCity = offers.filter((offer)=> offer.city.name === currentCity);
  const currentCityCoordinates = offersByCity[0]?.city;

  return(
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <Heading className="visually-hidden">Cities</Heading>
        <div className="tabs">
          <section className="locations container">
            <LocationsList city={currentCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Heading tag='h2' className="visually-hidden">Places</Heading>
              <b className="places__found">{offersByCity.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active"tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={offersByCity} setChosenId={setChosenId} />
            </section>
            <div className="cities__right-section">
              <Map
                variant='cities'
                chosenId={chosenId}
                offers={offersByCity}
                city={currentCityCoordinates}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
