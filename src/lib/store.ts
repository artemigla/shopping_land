import {configureStore} from '@reduxjs/toolkit';
import { allProductsSlice } from './features/slices/allProductsSlice';
import {categoriesSlice} from '@/lib/features/slices/categoriesSlice';
import searchSlice from '@/lib/features/slices/searchProducts';

export const makeStore = () => {
    return configureStore({
        reducer: {
            productStore: allProductsSlice.reducer,
            categoriesStore: categoriesSlice.reducer,
            searchStore: searchSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']