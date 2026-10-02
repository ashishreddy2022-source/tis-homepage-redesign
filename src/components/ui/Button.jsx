/**
 * Consistent button component with primary/secondary/outline variants.
 * Renders as an <a> when href is provided, otherwise <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900 shadow-md hover:shadow-lg',
    secondary: 'bg-gold-500 text-white hover:bg-gold-400 active:bg-gold-300 shadow-md hover:shadow-lg',
    outline: 'border-2 border-brand-600 text-brand-700 hover:bg-brand-50 active:bg-brand-100 dark:text-brand-300 dark:border-brand-400 dark:hover:bg-brand-900/30',
    ghost: 'text-brand-700 hover:bg-brand-50 active:bg-brand-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
