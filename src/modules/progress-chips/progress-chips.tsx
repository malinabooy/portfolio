import cn from 'classnames'

interface props {
  className?: string
  type?: string
  textOfType?: string
}
export const ProgressChips = (props: props) => {
  const { className, type, textOfType } = props

  return (
    <div class={cn('progress-chips', className)}>
      <p class="progress-chips__type">{type}</p>
      <p class="progress-chips__textOfType">{textOfType}</p>
    </div>
  )
}

