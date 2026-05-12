import React from 'react';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'custom';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  path?: string;
  size?: IconSize;
  className?: string;
}

const sizeMap: Record<IconSize, string> = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
  hero: 'w-12 h-12',
  custom: '',
};

export const Icon = ({
  path,
  size = 'md',
  className = '',
  viewBox = '0 0 24 24',
  strokeWidth = 2,
  children,
  ...props
}: IconProps) => {
  const sizeClass = sizeMap[size];

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {path ? <path d={path} /> : children}
    </svg>
  );
};

interface IconBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'subtle' | 'premium' | 'accent' | 'simple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const boxVariants = {
  simple: '',
  subtle: 'bg-brand-blue/10 text-brand-blue rounded-lg',
  premium: 'bg-brand-blue/20 text-brand-blue rounded-2xl shadow-lg shadow-brand-blue/5',
  accent: 'accent-icon-box', // Uses existing CSS class
};

const boxSizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-16 h-16',
};

export const IconBox = ({
  children,
  className = '',
  variant = 'simple',
  size = 'md',
}: IconBoxProps) => {
  const variantClass = boxVariants[variant];
  const sizeClass = boxSizes[size];

  return (
    <div className={`flex-shrink-0 flex items-center justify-center ${sizeClass} ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
};
