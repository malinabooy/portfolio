import { BlockPortfolio } from '@/modules/block-portfolio/block-portfolio'
import { Container } from '@/modules/container/container'
import { Footer } from '@/modules/footer/footer'
import { Header } from '@/modules/header/header'
import { ModalForm } from '@/modules/modal-form/modal-form'
import { Layout } from '@/views/_/layout'

export const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <BlockPortfolio />
        <Footer />
      </Container>
      <ModalForm />
    </Layout>
  )
}
