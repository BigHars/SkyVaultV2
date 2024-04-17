import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//asynkrone operationer for hent, tilføj og fjerne
export const fetchFavorites = createAsyncThunk( //hent db.json
  'favorites/fetch',
  async () => {
    const response = await fetch('http://localhost:3001/favorites');
    const data = await response.json();
    return data;
  }
);

export const addFavorite = createAsyncThunk( //tilføj til db.json
  'favorites/add',
  async (itemId) => {
    const response = await fetch('http://localhost:3001/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId }),
    });
    const data = await response.json();
    return data;
  }
);

export const removeFavorite = createAsyncThunk( //slet fraa db.json
  'favorites/remove',
  async (itemId) => {
    const response = await fetch(`http://localhost:3001/favorites/${itemId}`, {
      method: 'DELETE',
    });
    return itemId;
  }
);

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
      favorites: []
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addFavorite.fulfilled, (state, action) => {
          const newItem = action.payload; //payload indeholder data om den nye favorit
          // tjekker om id allerede findes
          const existingItem = state.favorites.find(item => item.id === newItem.id);
          // hvis ikke det findes tilføj til favorit
          if (!existingItem) {
            state.favorites.push(newItem);
          }
        })
        .addCase(removeFavorite.fulfilled, (state, action) => { //tilstanden af slicen
          state.favorites = state.favorites.filter((item) => item.id !== action.payload); //tjekker hvad der skal slettes på
        });
    },
  });

export default favoritesSlice.reducer;
