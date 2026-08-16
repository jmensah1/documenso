import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ className, style, ...props }: LogoProps) => {
  return (
    <img
      src="/icon.png"
      alt="JB Sign Icon"
      className={className}
      style={{ ...style, objectFit: 'contain' }}
      {...props}
    />
  );
};
