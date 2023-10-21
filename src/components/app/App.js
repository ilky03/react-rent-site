import Header from '../header/Header';
import CardList from '../cardList/CardList';
import ServicesList from '../servicesList/ServicesList';
import AdvantagesList from '../advantagesList/AdvantagesList';
import Footer from '../footer/Footer';

import './app.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <CardList />
          <ServicesList />
          <AdvantagesList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
