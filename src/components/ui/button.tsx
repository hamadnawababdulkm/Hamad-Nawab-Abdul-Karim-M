import * as React from 'react';
import { cn } from '@/src/lib/utils.ts';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

    const variants = {
      default:
        'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive:
        'bg-red-500 text-white shadow-sm hover:bg-red-600',
      outline:
        'border border-border bg-background shadow-sm hover:bg-secondary hover:text-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-secondary hover:text-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      accent: 'bg-accent text-accent-foreground shadow hover:bg-accent/90',
    };

    const sizes = {
      default: 'h-9 px-4 py-2 rounded-md',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9 rounded-md',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
