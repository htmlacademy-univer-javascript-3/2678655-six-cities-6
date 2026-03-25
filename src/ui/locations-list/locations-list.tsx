import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';

type Location = {
  name: string;
  isActive?: boolean;
};
type LocationsListProps = {
  city: string;
};

const DEFAULT_LOCATIONS: Location[] = [
  { name: 'Paris' },
  { name: 'Cologne' },
  { name: 'Brussels' },
  { name: 'Amsterdam' },
  { name: 'Hamburg' },
  { name: 'Dusseldorf' },
];

export function LocationsList({city}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (cityName: string) => {
    if (cityName === city){
      return;
    }
    dispatch(setCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_LOCATIONS.map((location) => (
        <li key={location.name} className="locations__item">
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleCityClick(location.name);
            }}
            className={cn('locations__item-link', 'tabs__item', {
              'tabs__item--active': location.name === city,
            })}
          >
            <span>{location.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
