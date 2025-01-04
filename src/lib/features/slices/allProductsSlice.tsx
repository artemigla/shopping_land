import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/interfaces/Interface";
import { BASE_URL } from "@/app/components/api/api";

const initialState: {
  productSelector: Product[];
  loading: boolean;
  error: string | null;
} = {
  productSelector: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data?.products;
  },
);

export const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.productSelector = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не вдалося завантажити продукти";
      });
  },
});

export default allProductsSlice.reducer;
