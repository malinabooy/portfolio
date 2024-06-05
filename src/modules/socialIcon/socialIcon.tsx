import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
}
export const SocialIcon = (props:props) => {
  const { className } = props

  return (
    <div class={cn('socialIcon', className)}>
      <a class='socialIcon__link' href="/"><Icon name='git'/></a>
      <a class='socialIcon__link' href="/"><Icon name='inst'/></a>
      <a class='socialIcon__link' href="/"><Icon name='tg'/></a>
    </div>
  )
}

