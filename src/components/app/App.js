import { useState } from 'react';

import Header from '../header/Header';
import CardList from '../cardList/CardList';
import ServicesList from '../servicesList/ServicesList';
import AdvantagesList from '../advantagesList/AdvantagesList';
import Footer from '../footer/Footer';
import Form from '../form/Form';

import './app.scss';

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const [formInputChoose, setFormInputChoose] = useState(null);

  const onChangeFormStatus = () => {
    setIsFormOpen(!isFormOpen);
  }

  const onChangeFormParam = (type, chooseValue = null) => {
    setFormType(type);
    setFormInputChoose(chooseValue);
    onChangeFormStatus();
  }

  return (
    <>
      <Header handleClick={onChangeFormStatus}/>
      <main>
        <section>
          <CardList handleClick={onChangeFormParam}/>
          <ServicesList handleClick={onChangeFormParam}/>
          <AdvantagesList />
        </section>
      </main>
      <Footer />

      <Form 
        isFormOpen={isFormOpen} 
        handleClick={onChangeFormStatus}
        type={formType}
        choosedValue={formInputChoose} 
      />
    </>
  );
}

export default App;
