import { Layout } from 'antd';
import Header from "./components/layouts/Header";
import Footer from './components/layouts/footer';
import Content from './views/content';

function App() {

  return (
    <>
      <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  )
}

export default App 
