import {configureStore} from '@reduxjs/toolkit';
import { productsSlice } from './features/slices/productsSlice';
import {categoriesSlice} from '@/lib/features/slices/categoriesSlice';
import searchSlice from '@/lib/features/slices/searchProducts';

export const makeStore = () => {
    return configureStore({
        reducer: {
            productStore: productsSlice.reducer,
            categoriesStore: categoriesSlice.reducer,
            searchStore: searchSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']