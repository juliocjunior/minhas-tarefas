import { Provider } from 'react-redux'
import React from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'
import AdicionarContato from './containers/AdicionarContato copy/index'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <AdicionarContato />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
