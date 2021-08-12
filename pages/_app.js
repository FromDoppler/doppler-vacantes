import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

import MainLayout from '../components/Layouts/MainLayout'
import JobLayout from '../components/Layouts/JobLayout'

import '../styles/globals.css'

const layouts = {
  MainLayout,
  JobLayout,
}

const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout]
    ? layouts[Component.layout]
    : MainLayout

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Banner />
      <Footer />
    </Layout>
  )
}

export default App
