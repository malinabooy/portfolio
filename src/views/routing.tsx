import { routing } from '@/views/utils/routing'
import { ListMenu } from '@/views/pages'
import { ProjectsPage } from '@/views/pages/projects-page'
import { ResumePage } from '@/views/pages/resume-page'
import { GamePage } from '@/views/pages/game-page'
import { AboutPage } from '@/views/pages/about-page'

export const associatedUrl = [
  {
    placeholder: 'Главная страница',
    path: 'index',
    component: <ListMenu />
  },
  {
    placeholder: 'Обо мне',
    path: 'about',
    component: <AboutPage />
  },
  {
    placeholder: 'Проекты',
    path: 'projects',
    component: <ProjectsPage />
  },
  {
    placeholder: 'Резюме',
    path: 'resume',
    component: <ResumePage />
  },
  {
    placeholder: 'Мини-игра',
    path: 'game',
    component: <GamePage />
  },
]

export default routing(associatedUrl)
