import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import './styles/App.scss';

const App = () => {
  const [images, setImages] = useState();
  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    const start = performance.now()
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
        const finish = performance.now();
        console.log("// Time observed before optimisation was between 700 and 1500 ms");
        console.log("time to fetch images:", finish - start);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <header>
        <svg width="160" height="48"><path d="M154.7 18a2.65 2.65 0 1 0 5.3 0 2.65 2.65 0 0 0-5.3 0zm-8.4-2.4h-5.6l7.6 13.2-7.6 13.2h5.6l7.6-13.2-7.6-13.2zm-10.8 12c0 1.6-1.3 2.6-3.3 2.6-1.7 0-2.8-.8-2.8-2 0-1.1.8-1.8 2.6-2.2l3.5-.4v2zm4.7.1v-5.9c0-2.8-.4-3.7-1.9-4.8a8.4 8.4 0 0 0-5.4-1.6c-2.7 0-5 .6-7.3 2l2 3.6c1.9-1 3.7-1.6 5.2-1.6 1.2 0 2 .5 2.4 1.2.2.4.2.3.2 1.5-4 .3-6.8.8-8.4 1.8a4.9 4.9 0 0 0-2.3 4.2c0 3.4 3 6 7 6 2.1 0 3.5-.6 4.5-2 1 1.3 2.1 2 3.5 2h.4l2-3.5c-1.6-.4-1.9-.8-1.9-2.9zm-78 1.3-1.9.3c-1.8 0-2.3-.6-2.3-2.9v-6.9h4.2v-3.9H58V10h-4.8v5.6h-2.8v4h2.8v8.9c0 2 .1 2.8.7 3.5.8 1 2.3 1.6 4.5 1.6 1.4 0 2.7-.1 3.8-.5V29zm6-4.2c0 3 2.1 5 4.9 5 2.7 0 4.8-2 4.8-5s-2.1-5.1-4.9-5.1c-2.8 0-4.8 2-4.8 5zm14.3 0c0 5.3-4 9.3-9.4 9.3-5.5 0-9.5-4-9.5-9.3 0-5.4 4-9.4 9.5-9.4 5.4 0 9.4 4 9.4 9.4zm-47.2 0c0 3 2 5 4.8 5 2.7 0 4.8-2 4.8-5s-2-5.1-4.8-5.1-4.8 2-4.8 5zm14.3 0c0 5.3-4 9.3-9.5 9.3s-9.5-4-9.5-9.3c0-5.4 4-9.4 9.5-9.4 5.4 0 9.5 4 9.5 9.4zm69.6 8.8h-5.6l-2.9-10.8-2.6 10.8h-5.8l-5-18h5l3 12.2 2.7-12.2h5.2l3 12.2 3-12.2h4.9l-5 18zm-34.4 0v-18h4.5l.3 2c1.5-1.5 2.7-2.2 4.2-2.2.5 0 1 0 1.8.2v4.5h-.7c-1.7 0-2.8.3-3.8 1.2-1.2 1-1.5 1.8-1.5 4.3v8h-4.8zm-61.6 0v-9.7c0-2.9-1-4.2-3.2-4.2-1.2 0-2.3.6-3 1.6-.5.8-.7 1.7-.7 3.3v9h-4.7v-9.2c0-1.6-.2-2.6-.6-3.3a3.1 3.1 0 0 0-2.7-1.3c-2.3 0-3.6 1.5-3.6 4.4v9.4H0v-18h4.4l.3 1.5c1.8-1.3 3-1.7 4.7-1.7 2.3 0 4 .8 5.7 2.7 2-2 3.8-2.7 6-2.7 2.4 0 4.4 1 5.6 2.7 1 1.3 1.2 2.4 1.2 5v10.5h-4.7z"/></svg>
      </header>

      <main className="wrapper">
        <h1>Superhero's favourite cars</h1>
        <p><button onClick={() => setFormIsVisible(true)}>Show the form</button></p>
        {
          formIsVisible ? <Form /> : null
        }
        <div className="image-listing">
          {
            images && images.map(img => (
              <div className="image-listing--entry" key={img.id} >
                <img src={img.url} alt=''/>
                <img src={img.user.profile_image} className="avatar" alt=''/>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
