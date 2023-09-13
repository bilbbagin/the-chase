import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './App.css';
import StageTwo from './components/Stages/StageTwo';
import StageOne from './components/Stages/StageOne';
import Title from './components/Title';
import AnswersGrid from './components/AnswersGrid';
import OpeningView from './components/OpeningView';
import WinnerView from './components/WinnerView';
import LoserView from './components/LoserView';

function App() {
  const [openingViewRunning, setOpeningViewRunning] = useState<boolean>(true);
  const [stageOneRunning, setStageOneRunning] = useState<boolean>(false);
  const [stageTwoRunning, setStageTwoRunning] = useState<boolean>(false);
  const [WinnerViewRunning, setWinningViewRunning] = useState(false);
  const [LoserViewRunning, setLoserViewRunning] = useState(false);

  const [numPlayersThrough, setNumPlayersThrough] = useState<number>(0);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const [numPlayersAnswers, setNumPlayersAnswers] = useState(0);
  const [numChaserAnswers, setNumChaserAnswers] = useState(1);

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<'players' | 'chaser'>();

  // useEffect(() => {
  //   if (!openingViewRunning) {
  //     setStageOneRunning(true);
  //   }
  // }, [openingViewRunning]);
  useEffect(() => {
    const body = document.querySelector('body');
    console.log(openingViewRunning);

    if (!openingViewRunning) {
      setStageOneRunning(true);
      if (body && body.style) {
        body.setAttribute('style', 'background-color: "transparent"');
        body.setAttribute('style', 'background-image: ""');
      }
    } else {
      if (body && body.style) {
        console.log('in my here');

        body.setAttribute('style', 'background-color: "transparent"');
        body.setAttribute('style', 'background-image: url("../src/chase_logo.png")');
      }
    }
  }, [openingViewRunning]);

  useEffect(() => {
    if (!stageOneRunning && !openingViewRunning) {
      setStageTwoRunning(true);
    }
  }, [stageOneRunning]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (!stageTwoRunning && !stageOneRunning && !openingViewRunning) {
      if (numChaserAnswers == numPlayersAnswers) {
        console.log('loser');

        setLoserViewRunning(true);
        if (body && body.style) {
          body.setAttribute('style', 'background-color: #a10808');
        }
      } else {
        console.log('winner');

        setWinningViewRunning(true);
        if (body && body.style) {
          
          body.setAttribute('style', 'background-color: #126e12');
        }
      }
    }
  }, [stageTwoRunning]);

  return (
    <>
      {openingViewRunning && <OpeningView setOpeningViewRunning={setOpeningViewRunning} />}
      {stageOneRunning && (
        <StageOne
          setStageOneRunning={setStageOneRunning}
          setNumPlayersThroughFinal={setNumPlayersThrough}
          setTotalMoneyFinal={setTotalMoney}
        />
      )}
      {stageTwoRunning && (
        <StageTwo
          totalMoney={totalMoney}
          numPlayersThrough={numPlayersThrough}
          setNumChaserAnswers={setNumChaserAnswers}
          setNumPlayersAnswers={setNumPlayersAnswers}
          setStageTwoRunning={setStageTwoRunning}
        />
      )}
      {WinnerViewRunning && <WinnerView totalMoney={totalMoney} numCorrectAnswers={numPlayersAnswers} />}
      {LoserViewRunning && <LoserView numCorrectAnswers={numPlayersAnswers} />}
    </>
  );
}

export default App;
