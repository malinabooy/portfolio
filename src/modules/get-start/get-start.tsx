import cn from 'classnames'

interface props {
  className?: string
}
export const GetStart = (props:props) => {
  const { className } = props

  return (
    <div class={cn('get-start', className)}>
      
    </div>
  )
}

