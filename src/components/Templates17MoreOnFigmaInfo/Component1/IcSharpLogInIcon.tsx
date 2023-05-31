import { memo, SVGProps } from 'react';

const IcSharpLogInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.25004 1.16667H10.5C11.1417 1.16667 11.6667 1.69167 11.6667 2.33333V11.6667C11.6667 12.3083 11.1417 12.8333 10.5 12.8333H5.25004C4.60837 12.8333 4.08337 12.3083 4.08337 11.6667V10.5H5.25004V11.6667H10.5V2.33333H5.25004V3.5H4.08337V2.33333C4.08337 1.69167 4.60837 1.16667 5.25004 1.16667Z'
      fill='#969696'
    />
    <path
      d='M5.88583 9.09417L6.70833 9.91667L9.625 7L6.70833 4.08333L5.88583 4.90583L7.39083 6.41667H1.75V7.58333H7.39083L5.88583 9.09417Z'
      fill='#969696'
    />
  </svg>
);
const Memo = memo(IcSharpLogInIcon);
export { Memo as IcSharpLogInIcon };
