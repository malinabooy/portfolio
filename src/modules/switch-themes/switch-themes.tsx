import cn from 'classnames'

interface props {
  className?: string
}
export const SwitchThemes = (props: props) => {
  const { className } = props

  return (
    <div class={cn('switch-themes', className)}>
      <div class="switch-themes__container">
        <input class="switch-themes__toggle" type="checkbox" id="theme-toggle"/>
        <label class="switch-themes__toggle-label" for="theme-toggle"></label>
      </div>
    </div>
  )
}
