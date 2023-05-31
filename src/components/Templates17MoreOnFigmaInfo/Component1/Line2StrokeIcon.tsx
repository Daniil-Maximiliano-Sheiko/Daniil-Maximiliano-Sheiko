import { memo, SVGProps } from 'react';

const Line2StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 120 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M120 1.5H0V0.5H120V1.5Z' fill='white' />
  </svg>
);
const Memo = memo(Line2StrokeIcon);
export { Memo as Line2StrokeIcon };
