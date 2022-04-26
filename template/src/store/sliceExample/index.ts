import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { SliceState } from './types';

const initialState: SliceState = {
  token: '',
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
  },
});

export const { setToken } = slice.actions;

export const selectToken = (root: RootState) => root.slice.token;

export default slice.reducer;
