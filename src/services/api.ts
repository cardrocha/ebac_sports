import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto, Favorito } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'api/ebac_sports'
    }),
    getFavoritos: builder.query<Favorito[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
export const { useGetFavoritosQuery } = api

export default api
