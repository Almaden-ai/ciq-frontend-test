import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { store } from '../store/index';
import { Provider } from 'react-redux';

import { HelmetComponent } from '../components/_helmet';

function MyApp({ Component, pageProps }: AppProps) {

  
  return(
      <Provider store={store}>

        <HelmetComponent />

        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
