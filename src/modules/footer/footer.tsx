import cn from 'classnames'

interface props {
  className?: string
}
export const Footer = (props:props) => {
  const { className } = props

  return (
    <div class={cn('footer', className)}>
      <p class="footer__copyright">
      Copyright © 2010-2024
      </p>
    </div>
  )
}

