import {configureStore} from '@reduxjs/toolkit';
import { productsSlice } from './features/slices/productsSlice';
import {categoriesSlice} from '@/lib/features/slices/categoriesSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            productStore: productsSlice.reducer,
            categoriesStore: categoriesSlice.reducer,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']