
import './App.css';
import { useSelector } from 'react-redux';
import Container from './components/Container';

function App() {
  const color = useSelector(state => state.colorReducer.color)
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Container/>
    </div>
  );
}

export default App;
