import {
  AlertCircleIcon,
  ApertureIcon,
  AppsIcon,
  BasketIcon,
  BorderAllIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderStyle2Icon,
  BorderTopIcon,
  BorderVerticalIcon,
  BoxAlignBottomIcon,
  BoxAlignLeftIcon,
  BoxIcon,
  BoxModelIcon,
  BrandCodesandboxIcon,
  BrandTablerIcon,
  CalendarIcon,
  CardboardsIcon,
  ChartArcsIcon,
  ChartAreaIcon,
  ChartBarIcon,
  ChartCandleIcon,
  ChartDonut3Icon,
  ChartDotsIcon,
  ChartLineIcon,
  ChartPieIcon,
  ChartRadarIcon,
  CircleDotIcon,
  ColumnsIcon,
  EditCircleIcon,
  EyeTableIcon,
  FileDotsIcon,
  FilesIcon,
  FileTextIcon,
  FilterIcon,
  JumpRopeIcon,
  LayoutGridIcon,
  LayoutKanbanIcon,
  LoginIcon,
  Message2Icon,
  PageBreakIcon,
  PhotoIcon,
  RotateIcon,
  RowInsertBottomIcon,
  ServerIcon,
  SettingsIcon,
  ShoppingCartIcon,
  SortAscendingIcon,
  UserCircleIcon,
  UserPlusIcon,
  ZoomCodeIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'SideBar' },

  {
    title: "Documento",
    icon: JumpRopeIcon,
    to: "/Documento/IndexDocumento",
  },
  {
    title: "Pessoa",
    icon: JumpRopeIcon,
    to: "/Pessoa/IndexPessoa",
  },
  {
    title: "Naturalidade",
    icon: JumpRopeIcon,
    to: "/Naturalidade/IndexNaturalidade",
  },
  {
    title: "Telefone",
    icon: JumpRopeIcon,
    to: "/Telefone/IndexTelefone",
  },
  {
    title: "Endereco",
    icon: JumpRopeIcon,
    to: "/Endereco/IndexEndereco",
  },
  {
    title: "DadosBancarios",
    icon: JumpRopeIcon,
    to: "/DadosBancarios/IndexDadosBancarios",
  },
  {
    title: "Banco",
    icon: JumpRopeIcon,
    to: "/Banco/IndexBanco",
  },
  {
    title: "AreaTecnica",
    icon: JumpRopeIcon,
    to: "/AreaTecnica/IndexAreaTecnica",
  },
  {
    title: "Coordenacao",
    icon: JumpRopeIcon,
    to: "/Coordenacao/IndexCoordenacao",
  },
  {
    title: "Edital",
    icon: JumpRopeIcon,
    to: "/Edital/IndexEdital",
  },
  {
    title: "Projeto",
    icon: JumpRopeIcon,
    to: "/Projeto/IndexProjeto",
  },
  {
    title: "PlanejamentoAlocacao",
    icon: JumpRopeIcon,
    to: "/PlanejamentoAlocacao/IndexPlanejamentoAlocacao",
  },
  {
    title: "AlocacaoBolsista",
    icon: JumpRopeIcon,
    to: "/AlocacaoBolsista/IndexAlocacaoBolsista",
  },
  {
    title: "VersaoModalidade",
    icon: JumpRopeIcon,
    to: "/VersaoModalidade/IndexVersaoModalidade",
  },
  {
    title: "PlanejamentoNivel",
    icon: JumpRopeIcon,
    to: "/PlanejamentoNivel/IndexPlanejamentoNivel",
  },
  {
    title: "VersaoNivel",
    icon: JumpRopeIcon,
    to: "/VersaoNivel/IndexVersaoNivel",
  },
  {
    title: "NivelBolsa",
    icon: JumpRopeIcon,
    to: "/NivelBolsa/IndexNivelBolsa",
  }
];

export default sidebarItem;