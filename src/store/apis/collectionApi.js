import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const collectionsApi = createApi({ //oprettelse af API-instansen med createApi funktionen
  reducerPath: 'hypixel',
  baseQuery: fetchBaseQuery({ // definerer den grundlæggende forespørgelsesfunktion med fetchBaseQuery
    baseUrl: 'https://api.hypixel.net/v2/'
  }),
  endpoints(builder) { // definerer slutpunkter for API'en med endpoins metoden
    return {
      fetchCollections: builder.query({ // definerer en forespørgelse for at hente samliner
        query: () => {
          return {
            url: 'resources/skyblock/collections',
            headers: {
              'API-KEY': '0471c1e0-82bd-4fd9-bfaa-4de40c4fc7be'
            },
            method: 'GET',
          };
        },
      })
    };
  },
});

export const { useFetchCollectionsQuery } = collectionsApi; // eksporterer en hook til at bruge fetchCollections forespørgelsen
export { collectionsApi }; // eksporterer API-instansen for yderligere brug i appen