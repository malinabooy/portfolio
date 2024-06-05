import { BlockPortfolio } from '@/modules/block-portfolio/block-portfolio'
import { Container } from '@/modules/container/container'
import { Header } from '@/modules/header/header'
import { Layout } from '@/views/_/layout'

export const Main = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <BlockPortfolio />
      </Container>
    </Layout>
  )
}
