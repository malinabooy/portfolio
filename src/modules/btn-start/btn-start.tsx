import cn from 'classnames'

interface props {
  className?: string
}
export const BtnStart = (props: props) => {
  const { className } = props

  return (
    <a href="#" class={cn('btn-start', className)}>
      <button class='btn-start__btn'>
        Get start
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="currentColor" />
        </svg>
      </button>
    </a>
  )
}

