import { Offers } from "../../mocks/types";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesListProps = {
  offers: Offers;
};

export function CitiesList({offers}: CitiesListProps): JSX.Element {
  return (
   <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard {...offer} key={offer.id}/>
      ))}
   </div>
  );
}
