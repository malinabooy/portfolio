import cn from 'classnames'

interface props {
  className?: string
  type?: string
  textOfType?: string
}
export const MainInfo = (props: props) => {
  const { className, type, textOfType } = props

  return (
    <div class={cn('main-info', className)}>
      <h1 class="main-info__type">{type}</h1>
      <h2 class="main-info__textOfType">{textOfType}</h2>
    </div>
  )
}

