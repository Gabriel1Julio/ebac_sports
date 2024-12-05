import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type AppState = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: AppState = {
  carrinho: [],
  favoritos: []
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.carrinho.find((p) => p.id === produto.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.carrinho.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritar } = appSlice.actions
export default appSlice.reducer
