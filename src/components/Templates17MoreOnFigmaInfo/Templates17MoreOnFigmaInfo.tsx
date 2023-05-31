import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './Templates17MoreOnFigmaInfo.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:5 */
export const Templates17MoreOnFigmaInfo: FC<Props> = memo(function Templates17MoreOnFigmaInfo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Component1 />
    </div>
  );
});
