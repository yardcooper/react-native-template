import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import entities from './entitiesExample';
import slice from './sliceExample';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['settings'],
};

const rootReducer = combineReducers({
  entities,
  slice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

// To be used instead of default 'useDispatch' and 'useSelector'.
export const useAppDispatch = () => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
