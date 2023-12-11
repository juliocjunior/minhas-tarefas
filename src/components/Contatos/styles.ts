import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
`

export const Nome = styled.textarea`
  color: #000;
  font-size: 20px;
  display: block;
  resize: none;
  background-color: #fcfcfc;
`

export const Email = styled.textarea`
  color: #000;
  font-size: 20px;
  display: block;
  resize: none;
  background-color: #fcfcfc;
`

export const Telefone = styled.textarea`
  color: #000;
  font-size: 20px;
  display: block;
  resize: none;
  background-color: #fcfcfc;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12;
  color: #fff;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
`

export const BarraAcoes = styled.div`
  padding: 16px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: #00a10d;
  border-radius: 0;
  margin-right: 35px;
  box-shadow: 10px 5px 5px black;
`

export const BotaoCancelar = styled(Botao)`
  background-color: #a12300;
  border-radius: 0;
  box-shadow: 10px 5px 5px black;
`

export const BotaoEditar = styled(Botao)`
  background-color: #0096a1;
  border-radius: 0;
  margin-right: 34px;
  box-shadow: 10px 5px 5px black;
`

export const BotaoRemover = styled(Botao)`
  background-color: #a00000;
  border-radius: 0;
  box-shadow: 10px 5px 5px black;
`
