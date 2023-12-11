import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import React, { FormEvent, useState } from 'react'
import * as S from './styles'
import Contato from '../../models/Contato'

const AdicionarContato = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, telefone, 9)
    dispatch(cadastrar(contatoParaAdicionar))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <S.CampoNome
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="nome completo"
        required
      />
      <S.CampoEmail
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="e-mail"
        required
      />
      <S.CampoTelefone
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        type="number"
        placeholder="telefone"
        required
      />
      <S.BotaoAdicionar type="submit">AdicionarContato</S.BotaoAdicionar>
    </S.Form>
  )
}

export default AdicionarContato
