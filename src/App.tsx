import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { store } from './store'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type Favorito = {
  id: number
}

function App() {
  // const [produtos, setProdutos] = useState<Produto[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
  //     .then((res) => res.json())
  //     .then((res) => setProdutos(res))
  // }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
        // produtos={produtos}
        // favoritos={produtos}
        // favoritar={produtos}
        // adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
