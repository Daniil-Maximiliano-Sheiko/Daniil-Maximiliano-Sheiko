import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Templates17MoreOnFigmaInfo } from './components/Templates17MoreOnFigmaInfo/Templates17MoreOnFigmaInfo';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Templates17MoreOnFigmaInfo />
    </div>
  );
});
