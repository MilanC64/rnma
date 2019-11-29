import React from 'react';

import MealsNavigator from './navigation/MealsNavigator';
import { useScreens } from 'react-native-screens';

useScreens();

export default function App() {
  return <MealsNavigator />
}


