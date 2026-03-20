import cn from 'classnames';

type Location = {
  name: string;
  isActive?: boolean;
};

const DEFAULT_LOCATIONS: Location[] = [
  { name: 'Paris' },
  { name: 'Cologne' },
  { name: 'Brussels' },
  { name: 'Amsterdam', isActive: true },
  { name: 'Hamburg' },
  { name: 'Dusseldorf' },
];

export function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_LOCATIONS.map((location) => (
        <li key={location.name} className="locations__item">
          <a
            href="#"
            className={cn('locations__item-link', 'tabs__item', {
              'tabs__item--active': location.isActive,
            })}
          >
            <span>{location.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
