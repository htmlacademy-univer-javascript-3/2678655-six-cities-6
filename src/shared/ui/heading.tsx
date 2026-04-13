import { memo } from 'react';

interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

export const Heading = memo(({
  tag: Tag = 'h1',
  className,
  children
}: HeadingProps): JSX.Element => (
  <Tag className={className}>{children}</Tag>
));

Heading.displayName = 'Heading';
