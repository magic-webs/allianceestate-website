/**
 * Shared button class strings.
 *
 * These replace the old global `.btn` / `.btn-primary` / … rules. Keeping them
 * as plain strings (rather than `@apply` component classes) means Tailwind's
 * scanner picks up every utility and the variants stay composable at the call
 * site — `${btnPrimary} w-full`, for example.
 */
export const btnBase =
  'inline-flex items-center justify-center rounded px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base font-semibold transition-all duration-400 ease-smooth text-center';

export const btnPrimary = `${btnBase} bg-gold text-white hover:-translate-y-0.5 hover:bg-gold-light`;

export const btnSecondary = `${btnBase} border border-gold bg-transparent text-gold hover:bg-gold hover:text-white`;

export const btnWhite = `${btnBase} bg-white text-primary hover:-translate-y-0.5 hover:bg-surface`;
