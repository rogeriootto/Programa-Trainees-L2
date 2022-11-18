import './App.css';
import Header from './containers/Header'
import LatestAuctions from './containers/LatestAuctions';
import GetStarted from './containers/GetStarted';
import Statistics from './containers/Statistics';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <LatestAuctions />
      <GetStarted />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
