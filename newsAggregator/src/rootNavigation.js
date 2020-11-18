/**
 * https://reactnavigation.org/docs/navigating-without-navigation-prop/
*/

import { createRef } from 'react';

export const navigationRef = createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
}
