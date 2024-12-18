import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './menuSlice';
import toggleTheme from './themeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      burgermenu: burgerReducer,
      theme: toggleTheme
    },
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']