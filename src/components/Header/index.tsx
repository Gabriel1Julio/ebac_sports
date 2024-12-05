import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { Produto } from '../../App'

const Header = () => {
  const itens = useSelector(
    (state: RootReducer) => state.app.carrinho as Produto[]
  )
  const favoritos = useSelector((state: RootReducer) => state.app.favoritos)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
