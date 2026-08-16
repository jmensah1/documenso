import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, style, ...props }: LogoProps) => {
  return (
    <img src="/logo.svg" alt="JB Sign" className={className} style={{ ...style, objectFit: 'contain' }} {...props} />
  );
};
