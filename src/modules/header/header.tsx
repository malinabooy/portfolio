import cn from 'classnames'
import { Logo } from '@/modules/logo/logo'
import { SocialIcon } from '@/modules/socialIcon/socialIcon'
import { SwitchThemes } from '@/modules/switch-themes/switch-themes'

interface props {
  className?: string
}
export const Header = (props: props) => {
  const { className } = props

  const navigationLinks = [
    { placeholder: 'Обо мне', path: '/about' },
    { placeholder: 'Проекты', path: '/projects' },
    { placeholder: 'Резюме', path: '/resume' },
    { placeholder: 'Мини-игра', path: '/game' },
  ]
  return (
    <header class={cn('header', className)}>
        <Logo className='header__logo' />
        <nav class='header__nav'>
          {navigationLinks.map(
            (link) => (
              <li>
                <a href={link.path} class='header__link'>
                  {link.placeholder}
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

