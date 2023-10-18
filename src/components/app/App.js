import Header from '../header/Header';
import CardList from '../cardList/CardList';
import ServicesList from '../servicesList/ServicesList';
import AdvantagesList from '../advantagesList/AdvantagesList';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <CardList />
      <ServicesList />
      <AdvantagesList />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
