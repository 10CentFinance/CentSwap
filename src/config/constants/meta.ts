import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CentSwap',
  description:
    'AMM on BSC by user count! Earn 10Cent through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (token launch model), NFTs, and more, on a platform you can trust.',
  image: 'public/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | CentSwap',
  },
  '/competition': {
    title: 'Trading Battle | CentSwap',
  },
  '/prediction': {
    title: 'Prediction | CentSwap',
  },
  '/farms': {
    title: 'Farms | CentSwap',
  },
  '/pools': {
    title: 'Pools | CentSwap',
  },
  '/lottery': {
    title: 'Lottery | CentSwap',
  },
  '/collectibles': {
    title: 'Collectibles | CentSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | CentSwap',
  },
  '/teams': {
    title: 'Leaderboard | CentSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | CentSwap',
  },
  '/profile': {
    title: 'Your Profile | CentSwap',
  },
}
