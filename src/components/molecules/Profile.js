const Profile = ({avatar, name}) => {
  return (
    <div className="profile">
      <img src={avatar} className="profile__avatar" alt={name} />
      <p className="profile__name">{name}</p>
    </div>
  )
}

export default Profile
