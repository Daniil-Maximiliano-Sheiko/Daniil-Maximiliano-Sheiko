import { memo, SVGProps } from 'react';

const Line1StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 179 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M179 1.99998L1.74846e-07 2L0 0L179 -1.56487e-05L179 1.99998Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Line1StrokeIcon);
export { Memo as Line1StrokeIcon };
