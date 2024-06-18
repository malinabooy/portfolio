import cn from 'classnames'

interface props {
  className?: string
}
export const BlockAbout = (props: props) => {
  const { className } = props

  return (
    <div class={cn('block-about', className)}>
      <h2 class='block-about__title'>Обо мне</h2>
      <p class='block-about__text'>Привет! Меня зовут Ильмир, и я - увлечённый фронтенд-разработчик с сильной любовью к инновациям и созданию уникальных пользовательских интерфейсов. За более чем десять лет работы в технологической сфере я приобрёл обширный опыт и мастерство в использовании HTML5, CSS3, JavaScript, а также современных фреймворков, таких как React, Vue.js и Angular.
        <br/>Мой путь начался с простого любопытства: я экспериментировал с веб-сайтами и осваивал основы веб-разработки. Со временем это любопытство превратилось в профессиональное искусство.</p>
    </div>
  )
}

