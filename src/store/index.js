import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { collectionsApi } from './apis/collectionApi';

export const store = configureStore({
  reducer: {
    [collectionsApi.reducerPath]: collectionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {  // Thunk middleware
    return getDefaultMiddleware()
      .concat(collectionsApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchCollectionsQuery } from './apis/collectionApi';
