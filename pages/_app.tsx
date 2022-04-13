import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';

type NexPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type NextPropsWithLayout = AppProps & {
  Component: NexPageWithLayout
}

function MyApp({ Component, pageProps }: NextPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />);

}

export default MyApp
