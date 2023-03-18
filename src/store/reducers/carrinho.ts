import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adcionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('item já adcionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adcionar } = carrinhoSlice.actions
export const carrinhoReducer = carrinhoSlice.reducer
