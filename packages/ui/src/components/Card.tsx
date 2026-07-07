import React from 'react';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const baseStyles = 'rounded-lg p-6';

    const variantStyles = {
      default: 'bg-slate-800 border border-slate-700',
      glass: 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20',
    };

    return (
      <div
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';

export default Card;
