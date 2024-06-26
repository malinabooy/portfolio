import cn from 'classnames'
import image from './assets/avatar.png';
import { MainInfo } from '../main-info/main-info';
import { BlockAbout } from '../block-about/block-about';
import { ProgressChips } from '../progress-chips/progress-chips';
import { HardSkills } from '../hard-skills/hard-skills';
import { GetStart } from '../get-start/get-start';
import { ProjectsPreview } from '../projects-preview/projects-preview';
import { FormContacts } from '../form-contacts/form-contacts';


interface props {
  className?: string
}
export const BlockPortfolio = (props: props) => {
  const { className } = props

  return (
    <div class={cn('block-portfolio', className)}>
      <div class="block-portfolio__top-block">
        <div class='block-portfolio__image-container'>
          <img src={image} alt='' />
        </div>
        <div class="block-portfolio__main-cards">
          <div class="block-portfolio__title-chips">
            <MainInfo type='ФИО' textOfType='Давлиев Ильмир' />
            <MainInfo type='Специализация' textOfType='Frontend-программист' />
            <MainInfo type='Город' textOfType='г. Казань' />
          </div>
          <BlockAbout />
          <div class="block-portfolio__bottom-chips">
            <ProgressChips type='Опыт работы<br>(лет)' textOfType='3<span>+</span>' />
            <ProgressChips type='Успешных <br>проектов' textOfType='20<span>+</span>' />
            <ProgressChips type='Счастливых <br>клиентов' textOfType='15<span>+</span>' />
          </div>
        </div>
      </div>
      <HardSkills />
      <div class="block-portfolio__bottom-block">
        <GetStart/>
        <ProjectsPreview/>
      </div>
    </div>
  )
}

