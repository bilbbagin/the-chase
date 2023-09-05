import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import StageOne from './components/Stages/StageOne';

function App() {
  const [price, setPrice] = useState<number>();
  const handlePrice = () => {};
  return (
    <>
      <StageOne />
    </>
  );
}

export default App;
