import Profile from './molecules/Profile'

const Modal = ({entry, closeModal}) => {
  return (
    <div className="modal" data-testid="modal">
      <div className="modal__backdrop" onClick={closeModal}>
        <div className="modal__container">
          <div className="modal__close" onClick={closeModal}>Close</div>
          <div className="modal__image">
            <img src={entry.url} alt={entry.alt_description}/>
          </div>
          <div className="modal__profile">
            <Profile avatar={entry.user.profile_image} name={entry.user.name} />
          </div>
          <div className="modal__description">{entry.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
