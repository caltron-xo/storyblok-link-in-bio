import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import MultiDimLink from '../components/MultiDimLink';
import PageHeader from '../components/PageHeader';
import BulletinBoard from '../components/BulletinBoard';
import FeaturedImages from '../components/FeaturedImages';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    MultiDimLink: MultiDimLink,
    PageHeader: PageHeader,
    BulletinBoard: BulletinBoard,
    FeaturedImages: FeaturedImages,
  },
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
