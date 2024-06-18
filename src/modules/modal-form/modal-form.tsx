import cn from 'classnames'

interface props {
  className?: string
}
export const ModalForm = (props: props) => {
  const { className } = props

  return (
    <div class={cn('modal-form', className)} id="feedbackModal">
      <div class="modal-form__content">
        <span class="modal-form__close">&times;</span>
        <form id="feedbackForm">
          <label for="name">Имя:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="name">Телефон:</label>
          <input type="tel" id="phone" name="phone" required />

          <label for="company">Организация:</label>
          <input type="text" id="company" name="company" />

          <label for="comment">Комментарий:</label>
          <textarea id="comment" name="comment" required></textarea>

          <button class="modal-form__submit-btn" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}

