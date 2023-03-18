import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery, useGetFavoritosQuery } from '../services/api'

import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   // favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const { data: favoritos } = useGetFavoritosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos?.map((f) => f.id)

    return IdsDosFavoritos?.includes(produtoId) ?? false
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            // favoritar={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
