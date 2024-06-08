import { Container } from '@/modules/container/container'
import { Footer } from '@/modules/footer/footer'
import { Header } from '@/modules/header/header'
import { Layout } from '@/views/_/layout'

export const ProjectsPage = () => {
  return (
    <Layout>
      <Container>
        <Header />

        <Footer/>
      </Container>
    </Layout>
  )
}