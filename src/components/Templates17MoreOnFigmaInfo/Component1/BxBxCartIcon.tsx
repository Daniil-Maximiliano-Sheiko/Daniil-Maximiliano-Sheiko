import { memo, SVGProps } from 'react';

const BxBxCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.0035 6.81175C19.9192 6.6899 19.8066 6.5903 19.6754 6.52149C19.5442 6.45269 19.3982 6.41672 19.25 6.41667H6.72196L5.66412 3.8775C5.52542 3.54312 5.29055 3.25746 4.9893 3.05673C4.68804 2.856 4.33396 2.74924 3.97196 2.75H1.83337V4.58333H3.97196L8.32062 15.0196C8.39028 15.1866 8.50778 15.3292 8.65834 15.4295C8.80891 15.5298 8.98579 15.5833 9.16671 15.5833H16.5C16.8823 15.5833 17.2242 15.3459 17.359 14.9893L20.109 7.656C20.1609 7.51724 20.1785 7.36794 20.1601 7.2209C20.1418 7.07387 20.088 6.93347 20.0035 6.81175V6.81175ZM15.8648 13.75H9.77812L7.48646 8.25H17.9273L15.8648 13.75Z'
      fill='white'
    />
    <path
      d='M9.625 19.25C10.3844 19.25 11 18.6344 11 17.875C11 17.1156 10.3844 16.5 9.625 16.5C8.86561 16.5 8.25 17.1156 8.25 17.875C8.25 18.6344 8.86561 19.25 9.625 19.25Z'
      fill='white'
    />
    <path
      d='M16.0416 19.25C16.801 19.25 17.4166 18.6344 17.4166 17.875C17.4166 17.1156 16.801 16.5 16.0416 16.5C15.2822 16.5 14.6666 17.1156 14.6666 17.875C14.6666 18.6344 15.2822 19.25 16.0416 19.25Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(BxBxCartIcon);
export { Memo as BxBxCartIcon };
