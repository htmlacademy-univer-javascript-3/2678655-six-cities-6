import { CitiesCard } from "../cities-card/cities-card";

const citiesCards = [
  {
    id: 1,
    isPremium: true,
    image: 'markup/img/apartment-01.jpg',
    price: 120,
    stayDuration: 'night',
    isBookmarked: false,
    stars: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    isPremium: false,
    image: 'markup/img/room.jpg',
    price: 80,
    stayDuration: 'night',
    isBookmarked: true,
    stars: 4,
    title: 'Wood and stone place',
    type: 'Apartment'
  },
  {
    id: 3,
    isPremium: false,
    image: 'markup/img/apartment-02.jpg',
    price: 132,
    stayDuration:'night',
    isBookmarked: false,
    stars: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    isPremium: true,
    image: 'markup/img/apartment-03.jpg',
    price: 180,
    stayDuration:'night',
    isBookmarked: false,
    stars: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 5,
    isPremium: false,
    image: 'markup/img/room.jpg',
    price: 80,
    stayDuration: 'night',
    isBookmarked: true,
    stars: 4,
    title: 'Wood and stone place',
    type: 'Room'
  }
] as const


export function CitiesList():JSX.Element {
  return (
   <div className="cities__places-list places__list tabs__content">
      {citiesCards.map((card) => (
        <CitiesCard {...card} key={`cities-card-${card.id}`}/>
      ))}
   </div>
  );
}
