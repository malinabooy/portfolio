import cn from 'classnames'
import { Logo } from '@/modules/logo/logo'
import { SocialIcon } from '@/modules/socialIcon/socialIcon'
import { SwitchThemes } from '@/modules/switch-themes/switch-themes'

interface props {
  className?: string
}
export const Header = (props: props) => {
  const { className } = props

  return (
    <header class={cn('header', className)}>
        <Logo className='header__logo' />
        <nav class='header__nav'>
          {['Обо мне', 'Проекты', 'Резюме', 'Контакты', 'Мини-игра'].map(
            (li) => (
              <li>
                <a href='javascript:void(0)' class='header__link'>
                  {li}
                </a>
              </li>
            )
          )}
        </nav>
        <SocialIcon className='header__social-icon'/>
        <SwitchThemes/>
    </header>
  )
}

