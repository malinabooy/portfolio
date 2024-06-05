import cn from 'classnames'

interface props {
  className?: string
}
export const ProjectsPreview = (props: props) => {
  const { className } = props

  return (
    <div class={cn('projects-preview', className)}>
      <div class="projects-preview__top-block">
        <p class="projects-preview__title">Projects</p>
        <a href="#" class="projects-preview__see-all">See all</a>
      </div>
      <div class="projects-preview__swiper">
        
      </div>
    </div>
  )
}

