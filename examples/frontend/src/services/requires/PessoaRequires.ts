import serviceFactory from './factory.js'

export default function PessoaService() {
  return serviceFactory('api/Pessoa')
}