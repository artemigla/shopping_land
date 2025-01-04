import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/interfaces/Interface";
import { BASE_URL } from "@/app/components/api/api";

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface CategoryState {
  categories: Category[];
  productsCategories: Product[];
  categoryImages: { [key: string]: string };
  activeCategory: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  productsCategories: [],
  categoryImages: {},
  activeCategory: null,
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();
    return data;
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  "categories/fetchProductsByCategory",
  async (category: string) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await response.json();
    return { category, products: data?.products };
  },
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string | null>) => {
      state.activeCategory = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.categories = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch categories";
        state.loading = false;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.productsCategories = action.payload.products;
        state.activeCategory = action.payload.category;
        state.loading = false;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch products";
        state.loading = false;
      });
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
