// Not sure we need this, but it's here for now.

'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('sprite.svg', { as: 'image' });
  return null;
}
