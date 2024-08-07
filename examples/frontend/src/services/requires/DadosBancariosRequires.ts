import serviceFactory from './factory.js'

export default function DadosBancariosService() {
  return serviceFactory('api/DadosBancarios')
}