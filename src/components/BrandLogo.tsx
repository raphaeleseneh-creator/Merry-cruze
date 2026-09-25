import React from 'react';

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large';
  onDark?: boolean;
}

const SIZE_CLASSES = {
  small: {
    wrapper: 'gap-1.5',
    mark: 'h-7 w-auto',
    wordmark: 'h-4 w-auto',
  },
  medium: {
    wrapper: 'gap-2',
    mark: 'h-8 sm:h-9 w-auto',
    wordmark: 'h-[18px] sm:h-5 w-auto',
  },
  large: {
    wrapper: 'gap-2.5',
    mark: 'h-11 w-auto',
    wordmark: 'h-6 w-auto',
  },
} as const;

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'medium',
  onDark = false,
}) => {
  const classes = SIZE_CLASSES[size];

  return (
    <span
      className={`inline-flex items-center ${classes.wrapper} ${
        onDark ? 'rounded-xl bg-white px-3 py-2' : ''
      }`}
    >
      <img
        src="/brand/merrycruze-mark.png"
        alt=""
        aria-hidden="true"
        className={`${classes.mark} object-contain shrink-0`}
      />
      <img
        src="/brand/merrycruze-wordmark.png"
        alt="Merrycruze"
        className={`${classes.wordmark} object-contain`}
      />
    </span>
  );
};
