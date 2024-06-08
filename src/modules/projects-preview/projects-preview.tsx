import cn from 'classnames';

interface Props {
  className?: string;
}

export const ProjectsPreview = (props: Props) => {
  const { className } = props;

  const images = [
    { src: './assets/images/project1.jpg', link: '/page1' },
    { src: './assets/images/project2.jpg', link: '/page2' },
    { src: './assets/images/project3.jpg', link: '/page3' },
    { src: './assets/images/project1.jpg', link: '/page4' },
    { src: './assets/images/project2.jpg', link: '/page5' },
    { src: './assets/images/project3.jpg', link: '/page6' },
  ];

  return (
    <div class={cn('projects-preview', className)}>
      <div class="projects-preview__top-block">
        <p class="projects-preview__title">Проекты</p>
        <a href='/projects' class="projects-preview__see-all">Посмотреть всё</a>
      </div>
      <div class="projects-preview__swiper">
        <div class="projects-preview__swiper-wrapper">
          {images.map((image, index) => (
            <div class="projects-preview__swiper-slide">
              <a href={image.link}>
                <img src={image.src} alt={`Project ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

