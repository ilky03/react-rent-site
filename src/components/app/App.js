import { useState, useEffect } from 'react';

import Header from '../header/Header';
import CardList from '../cardList/CardList';
import ServicesList from '../servicesList/ServicesList';
import AdvantagesList from '../advantagesList/AdvantagesList';
import Footer from '../footer/Footer';
import Form from '../form/Form';

import './app.scss';

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [formType, setFormType] = useState(null);
  const [formInputChoose, setFormInputChoose] = useState(null);
  
  const onChangeFormStatus = () => {
    setIsFormOpen(!isFormOpen);
  }

  const onChangeContentLoaded = () => { 
    setIsContentLoaded((isContentLoaded) => !isContentLoaded);
  }

  const onChangeFormParam = (type, chooseValue = null) => {
    setFormType(type);
    setFormInputChoose(chooseValue);
    onChangeFormStatus();
  }

  useEffect(() => {
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show');
        } else {
          change.target.classList.remove('element-show');
        }
      });
    }

    let options = {
      threshold: [0.15]
    };

    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
      observer.observe(elm);
    }
  }, [isContentLoaded]);

  return (
    <>
      <Header handleClick={onChangeFormParam}/>
      <main>
        <section>
          <CardList handleClick={onChangeFormParam} handleLoaded={onChangeContentLoaded}/>
          <ServicesList handleClick={onChangeFormParam} handleLoaded={onChangeContentLoaded}/>
          <AdvantagesList />
        </section>
      </main>
      <Footer />

      <Form 
        isFormOpen={isFormOpen} 
        handleClick={onChangeFormParam}
        type={formType}
        choosedValue={formInputChoose} 
      />
    </>
  );
}

export default App;
