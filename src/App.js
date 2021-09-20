import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Card from './components/Card';
import Modal from './components/Modal'
import './styles/App.scss';

const App = () => {
  const [images, setImages] = useState();
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [focusedEntry, setFocusedEntry] = useState(null);

  useEffect(() => {
    const start = performance.now()
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        const finish = performance.now();
        console.log("// Time observed before optimisation was between 700 and 1500 ms");
        console.log("time to fetch images:", finish - start);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const viewDetailedEntry = (entry) => {
    setFocusedEntry(entry);
    setModalIsVisible(true);
  }

  const closeModal = () => {
    setFocusedEntry(null);
    setModalIsVisible(false);
  }

  return (
    <div className='app'>
      <Header />
      <main className="wrapper">
        <div className="intro">
          <h1>What we've been up to recently</h1>
          <p><button className="btn primary" onClick={() => setFormIsVisible(formIsVisible => !formIsVisible)}>Tell me about yourself</button></p>
        </div>

        {
          formIsVisible ? <Form /> : null
        }
        <div className="feed">
          {
            images && images.map(img => (
              <Card
                key={img.id}
                img={img}
                viewDetailedEntry={viewDetailedEntry}
              />
            ))
          }
        </div>
      </main>

      { modalIsVisible ?
        <Modal
          entry={focusedEntry}
          closeModal={closeModal}
        />
        : null }
    </div>
  );
}

export default App;
