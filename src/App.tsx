import { Provider } from 'react-redux'
import React from 'react'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral/index'
import ListaDeTarefas from './containers/ListaDeTarefas'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
