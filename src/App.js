import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
