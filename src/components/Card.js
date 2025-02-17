import Profile from './molecules/Profile'

const Card = ({img, viewDetailedEntry}) => {
  return(
    <div className="feed-entry" key={img.id}>
      <div className="feed-entry__superhero">
        <div className="feed-entry__profile">
          <Profile avatar={img.user.profile_image} name={img.user.name} />
        </div>
        <div className="feed-entry__stats">

        </div>
      </div>
      <div className="feed-entry__image" onClick={() => viewDetailedEntry(img)}>
        <img src={img.url} alt={img.alt_description}/>
        <div className="feed-entry__image-stats">
          <svg aria-hidden="true" data-prefix="fas" data-icon="hand-spock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m510.9 145.27-68.296 286.824A103.995 103.995 0 0 1 341.437 512H214.074a135.97 135.97 0 0 1-93.185-36.953L12.591 373.127a39.992 39.992 0 0 1 54.812-58.25l60.593 57.026a283.248 283.248 0 0 0-11.67-80.468L73.637 147.36a40.006 40.006 0 1 1 76.719-22.719l37.154 125.395a8.331 8.331 0 0 0 16.057-4.441l-50.305-195.64a39.996 39.996 0 1 1 77.468-19.938l56.095 218.158a10.42 10.42 0 0 0 20.3-.501L344.808 63.97a40.052 40.052 0 0 1 51.302-30.09c19.86 6.3 30.863 27.674 26.676 48.085l-33.839 164.966a7.552 7.552 0 0 0 14.744 3.267l29.397-123.459a39.994 39.994 0 1 1 77.813 18.531Z"/></svg>
          {img.likes}
        </div>
      </div>


      <p>{img.description}</p>

    </div>
  )
}

export default Card
