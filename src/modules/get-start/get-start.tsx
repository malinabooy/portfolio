import cn from 'classnames'
import { BtnStart } from '../btn-start/btn-start'

interface props {
  className?: string
}
export const GetStart = (props: props) => {
  const { className } = props

  return (
    <div class={cn('get-start', className)}>
      <p class="get-start__content">
        Let's grab a coffee and jump on conversation chat with me.
      </p>
      <BtnStart />
    </div>
  )
}

