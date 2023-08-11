import Script from 'next/script'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <>
    <Script
    strategy="lazyOnload"
    src={`https://static.senja.io/dist/platform.js`}
  />
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp
