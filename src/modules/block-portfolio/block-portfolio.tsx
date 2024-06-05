import cn from 'classnames'
import image from './assets/avatar.png';
import { MainInfo } from '../main-info/main-info';
import { BlockAbout } from '../block-about/block-about';
import { ProgressChips } from '../progress-chips/progress-chips';
import { HardSkills } from '../hard-skills/hard-skills';


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
            <MainInfo type='Name' textOfType='Давлиев Ильмир' />
            <MainInfo type='Profession' textOfType='Frontend-программист' />
            <MainInfo type='Location' textOfType='г. Казань' />
          </div>
          <BlockAbout />
          <div class="block-portfolio__bottom-chips">
            <ProgressChips type='Years of <br>Experience' textOfType='3<span>+</span>' />
            <ProgressChips type='Successful <br>Projects' textOfType='20<span>+</span>' />
            <ProgressChips type='My happy <br>Client' textOfType='15<span>+</span>' />
          </div>
        </div>
      </div>
      <div class="block-portfolio__bottom-block">
        <HardSkills />
        
      </div>
    </div>
  )
}

