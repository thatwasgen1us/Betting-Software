import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Game {
  id: string;
  name: string;
  typeDescription: string;
  [key: string]: any;
}

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/pragmatic/game/' }),
  endpoints: (builder) => ({
    getGames: builder.query<Game[], void>({
      query: () => 'list?partner_name=belparyaj',
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
