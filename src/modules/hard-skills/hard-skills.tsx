import cn from 'classnames'

interface props {
  className?: string
}
export const HardSkills = (props: props) => {
  const { className } = props

  return (
    <div class={cn('hard-skills', className)}>
      <h2 class="hard-skills__title">Hard skills</h2>
      <ul class="hard-skills__skills">
            {['HTML5','CSS3','JS','Vue.js','TypeScript','ES6','Bootstrap4','Sass/Scss','SQL','Вёрстка по БЭМу','Адаптивная вёрстка','Кросс-браузерная вёрстка'].map(
              (li) => (
                <li class="hard-skills__skill">#{li}
                  </li>
              )
            )}
      </ul>
    </div>
  )
}

