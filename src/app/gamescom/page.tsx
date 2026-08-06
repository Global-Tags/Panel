import { Metadata } from 'next';
import GamescomPage from './GamescomPage';

export const metadata: Metadata = {
  title: 'Gamescom',
  description: 'GlobalTags at Gamescom',
  openGraph: {
    title: 'GlobalTags at Gamescom',
    siteName: 'GlobalTags',
    images: '/opengraph-image.png'
  }
}

export default function Gamescom() {
  return <GamescomPage />;
}