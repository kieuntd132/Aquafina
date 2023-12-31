import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Banner } from "../../../../domain/entity/Banner";
import { firestore } from "./reducerUser";

export interface BannerState {
  banners: Banner[];
  loading: boolean;
}

const initialState: BannerState = {
  banners: [],
  loading: false,
};

export const getAllBanner = createAsyncThunk(
  "banner/getAllBanner",
  async () => {
    let banners: Banner[] = [];
    try {
      const snapshot = await firestore.collection("banners").get();
      banners = snapshot.docs.map((doc) => {
        const data = doc.data() as Banner;
        const key = doc.id;
        return { ...data, key };
      });
      return banners;
    } catch (error) {
      console.log("Error Get Banner: ", error);
      return banners;
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBanner.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBanner.fulfilled, (state, action) => {
      state.loading = false;
      state.banners = action.payload;
    });
    builder.addCase(getAllBanner.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;