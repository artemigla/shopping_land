import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './menuSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      burgermenu: burgerReducer
    },
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']