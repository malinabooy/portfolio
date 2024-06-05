import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
}

export const Logo = (props: props) => {
  const { className } = props

  return (
    <a href='/' class={cn('logo', className)}>
      <Icon name='logo' />
    </a>
  )
}

