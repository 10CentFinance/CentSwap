import { MenuEntry } from '@kongswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '',
      },
      {
        label: t('Liquidity'),
        href: '',
      }
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Profile'),
  //   icon: 'GroupsIcon',
  //   href:'/profile'
  //   // items: [
  //   //   {
  //   //     label: t('Task Center'),
  //   //     href: '/profile/tasks',
  //   //   },
  //   //   {
  //   //     label: t('Your Profile'),
  //   //     href: '/profile',
  //   //   },
  //   // ],
  // },
  {
    label: t('Roadmap'),
    icon: 'InfoIcon',
    href:'/roadmap'
    // items: [
    //   {
    //     label: t('Overview'),
    //     href: 'https://10cent-finance.gitbook.io/10cent-whitepaper/introduction/descripcion-del-proyecto',
    //   },
    //   {
    //     label: t('Token'),
    //     href: 'https://10cent-finance.gitbook.io/10cent-whitepaper/token/10cent-token',
    //   },
    //   {
    //     label: t('Features'),
    //     href: 'https://10cent-finance.gitbook.io/10cent-whitepaper/features/caracteristicas',
    //   },
    //   {
    //     label: t('Roadmap'),
    //     href: 'https://10cent-finance.gitbook.io/10cent-whitepaper/ecosystem/roadmap',
    //   },
    // ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/10CentFinance',
      },
      {
        label: t('Docs'),
        href: 'https://10cent-finance.gitbook.io/10cent-whitepaper/introduction/descripcion-del-proyecto',
      },
      // {
      //   label: t('Merch'),
      //   href: '',
      // },
    ],
  },
]

export default config
