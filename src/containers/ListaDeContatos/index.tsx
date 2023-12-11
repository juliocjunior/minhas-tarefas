import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { Container } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
