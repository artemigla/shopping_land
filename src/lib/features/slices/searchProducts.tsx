import { BASE_URL } from "@/app/components/api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category: string;
}

interface ProductsState {
  productsSearch: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  productsSearch: [],
  loading: false,
  error: null,
};

export const fetchSearchProducts = createAsyncThunk(
  "fetchSearchProducts",
  async (searchQuery: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/products/search?q=${searchQuery}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data?.products;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  },
);

export const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsSearch = action.payload;
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default searchSlice.reducer;
