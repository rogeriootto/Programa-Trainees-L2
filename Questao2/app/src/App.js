import './App.css';
import Header from './containers/Header'
import LatestAuctions from './containers/LatestAuctions';

function App() {
  return (
    <div className="container">
      <Header />
      <LatestAuctions />
    </div>
  );
}

export default App;
