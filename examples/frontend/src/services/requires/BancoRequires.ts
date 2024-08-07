import serviceFactory from './factory.js'

export default function BancoService() {
  return serviceFactory('api/Banco')
}