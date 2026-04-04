import { useAppSelector } from '../../hooks';
import { getError } from '../../store/selectors';

export function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return error ? (
    <div
      style={{
        position: 'fixed',
        top: '30px',
        right: '30px',
        padding: '10px',
        backgroundColor: '#d96666',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      {error}
    </div>
  ) : null;
}
