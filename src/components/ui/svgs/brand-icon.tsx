import type { SVGProps } from "react";

export function createBrandIcon(src: string, viewBox = "0 0 24 24") {
  const BrandIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox={viewBox} role="img" aria-hidden>
      <image href={src} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
    </svg>
  );
  return BrandIcon;
}
