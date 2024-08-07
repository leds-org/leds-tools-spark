const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
    {
    name: 'Index',
    path: '/',
    component: () => import('@/views/index.vue'),
    },

    {

        name: 'Documento',
        path: '/Documento/IndexDocumento',
        component: () => import('@/views/ConectaFapes/Documento/IndexDocumento.vue'),
    },
    {
        name: 'CadastroDocumento',
        path: '/Documento/formDocumento/:id?/:Documento?',
        component: () => import('@/views/ConectaFapes/Documento/FormDocumento.vue'),
    },
    {

        name: 'Pessoa',
        path: '/Pessoa/IndexPessoa',
        component: () => import('@/views/ConectaFapes/Pessoa/IndexPessoa.vue'),
    },
    {
        name: 'CadastroPessoa',
        path: '/Pessoa/formPessoa/:id?/:Pessoa?',
        component: () => import('@/views/ConectaFapes/Pessoa/FormPessoa.vue'),
    },
    {

        name: 'Naturalidade',
        path: '/Naturalidade/IndexNaturalidade',
        component: () => import('@/views/ConectaFapes/Naturalidade/IndexNaturalidade.vue'),
    },
    {
        name: 'CadastroNaturalidade',
        path: '/Naturalidade/formNaturalidade/:id?/:Naturalidade?',
        component: () => import('@/views/ConectaFapes/Naturalidade/FormNaturalidade.vue'),
    },
    {

        name: 'Telefone',
        path: '/Telefone/IndexTelefone',
        component: () => import('@/views/ConectaFapes/Telefone/IndexTelefone.vue'),
    },
    {
        name: 'CadastroTelefone',
        path: '/Telefone/formTelefone/:id?/:Telefone?',
        component: () => import('@/views/ConectaFapes/Telefone/FormTelefone.vue'),
    },
    {

        name: 'Endereco',
        path: '/Endereco/IndexEndereco',
        component: () => import('@/views/ConectaFapes/Endereco/IndexEndereco.vue'),
    },
    {
        name: 'CadastroEndereco',
        path: '/Endereco/formEndereco/:id?/:Endereco?',
        component: () => import('@/views/ConectaFapes/Endereco/FormEndereco.vue'),
    },
    {

        name: 'DadosBancarios',
        path: '/DadosBancarios/IndexDadosBancarios',
        component: () => import('@/views/ConectaFapes/DadosBancarios/IndexDadosBancarios.vue'),
    },
    {
        name: 'CadastroDadosBancarios',
        path: '/DadosBancarios/formDadosBancarios/:id?/:DadosBancarios?',
        component: () => import('@/views/ConectaFapes/DadosBancarios/FormDadosBancarios.vue'),
    },
    {

        name: 'Banco',
        path: '/Banco/IndexBanco',
        component: () => import('@/views/ConectaFapes/Banco/IndexBanco.vue'),
    },
    {
        name: 'CadastroBanco',
        path: '/Banco/formBanco/:id?/:Banco?',
        component: () => import('@/views/ConectaFapes/Banco/FormBanco.vue'),
    },
    {

        name: 'AreaTecnica',
        path: '/AreaTecnica/IndexAreaTecnica',
        component: () => import('@/views/ConectaFapes/AreaTecnica/IndexAreaTecnica.vue'),
    },
    {
        name: 'CadastroAreaTecnica',
        path: '/AreaTecnica/formAreaTecnica/:id?/:AreaTecnica?',
        component: () => import('@/views/ConectaFapes/AreaTecnica/FormAreaTecnica.vue'),
    },
    {

        name: 'Coordenacao',
        path: '/Coordenacao/IndexCoordenacao',
        component: () => import('@/views/ConectaFapes/Coordenacao/IndexCoordenacao.vue'),
    },
    {
        name: 'CadastroCoordenacao',
        path: '/Coordenacao/formCoordenacao/:id?/:Coordenacao?',
        component: () => import('@/views/ConectaFapes/Coordenacao/FormCoordenacao.vue'),
    },
    {

        name: 'Edital',
        path: '/Edital/IndexEdital',
        component: () => import('@/views/ConectaFapes/Edital/IndexEdital.vue'),
    },
    {
        name: 'CadastroEdital',
        path: '/Edital/formEdital/:id?/:Edital?',
        component: () => import('@/views/ConectaFapes/Edital/FormEdital.vue'),
    },
    {

        name: 'Projeto',
        path: '/Projeto/IndexProjeto',
        component: () => import('@/views/ConectaFapes/Projeto/IndexProjeto.vue'),
    },
    {
        name: 'CadastroProjeto',
        path: '/Projeto/formProjeto/:id?/:Projeto?',
        component: () => import('@/views/ConectaFapes/Projeto/FormProjeto.vue'),
    },
    {

        name: 'PlanejamentoAlocacao',
        path: '/PlanejamentoAlocacao/IndexPlanejamentoAlocacao',
        component: () => import('@/views/ConectaFapes/PlanejamentoAlocacao/IndexPlanejamentoAlocacao.vue'),
    },
    {
        name: 'CadastroPlanejamentoAlocacao',
        path: '/PlanejamentoAlocacao/formPlanejamentoAlocacao/:id?/:PlanejamentoAlocacao?',
        component: () => import('@/views/ConectaFapes/PlanejamentoAlocacao/FormPlanejamentoAlocacao.vue'),
    },
    {

        name: 'AlocacaoBolsista',
        path: '/AlocacaoBolsista/IndexAlocacaoBolsista',
        component: () => import('@/views/ConectaFapes/AlocacaoBolsista/IndexAlocacaoBolsista.vue'),
    },
    {
        name: 'CadastroAlocacaoBolsista',
        path: '/AlocacaoBolsista/formAlocacaoBolsista/:id?/:AlocacaoBolsista?',
        component: () => import('@/views/ConectaFapes/AlocacaoBolsista/FormAlocacaoBolsista.vue'),
    },
    {

        name: 'VersaoModalidade',
        path: '/VersaoModalidade/IndexVersaoModalidade',
        component: () => import('@/views/ConectaFapes/VersaoModalidade/IndexVersaoModalidade.vue'),
    },
    {
        name: 'CadastroVersaoModalidade',
        path: '/VersaoModalidade/formVersaoModalidade/:id?/:VersaoModalidade?',
        component: () => import('@/views/ConectaFapes/VersaoModalidade/FormVersaoModalidade.vue'),
    },
    {

        name: 'PlanejamentoNivel',
        path: '/PlanejamentoNivel/IndexPlanejamentoNivel',
        component: () => import('@/views/ConectaFapes/PlanejamentoNivel/IndexPlanejamentoNivel.vue'),
    },
    {
        name: 'CadastroPlanejamentoNivel',
        path: '/PlanejamentoNivel/formPlanejamentoNivel/:id?/:PlanejamentoNivel?',
        component: () => import('@/views/ConectaFapes/PlanejamentoNivel/FormPlanejamentoNivel.vue'),
    },
    {

        name: 'VersaoNivel',
        path: '/VersaoNivel/IndexVersaoNivel',
        component: () => import('@/views/ConectaFapes/VersaoNivel/IndexVersaoNivel.vue'),
    },
    {
        name: 'CadastroVersaoNivel',
        path: '/VersaoNivel/formVersaoNivel/:id?/:VersaoNivel?',
        component: () => import('@/views/ConectaFapes/VersaoNivel/FormVersaoNivel.vue'),
    },
    {

        name: 'NivelBolsa',
        path: '/NivelBolsa/IndexNivelBolsa',
        component: () => import('@/views/ConectaFapes/NivelBolsa/IndexNivelBolsa.vue'),
    },
    {
        name: 'CadastroNivelBolsa',
        path: '/NivelBolsa/formNivelBolsa/:id?/:NivelBolsa?',
        component: () => import('@/views/ConectaFapes/NivelBolsa/FormNivelBolsa.vue'),
    },
    ]
};

export default MainRoutes;