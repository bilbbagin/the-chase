import React, { useEffect, useState } from 'react';
import Answers from '../Answers';
import GameBoard from '../GameBoard';
import Question from '../Question';
import { IStepProps, TStepName } from '../Step';
import Timer from '../Timer';
import Title from '../Title';
import {
  baseBoard,
  formatCurrency,
  questionsDB,
  setChaserDown,
  setPlayerDown,
  APPLE,
} from '../utils';
import '../Step.css';

let baseBoardCopy = structuredClone(baseBoard);
const NUM_PLAYERS = 4;

interface Props {
  setStageOneRunning: (param: boolean) => void;
  setTotalMoneyFinal: (param: number) => void;
  setNumPlayersThroughFinal: (param: number) => void;
}

const StageOne: React.FC<Props> = ({
  setStageOneRunning,
  setTotalMoneyFinal,
  setNumPlayersThroughFinal,
}: Props) => {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [numPlayersThrough, setNumPlayersThrough] = useState<number>(0);
  const [questionIdx, setQuestionIndex] = useState<number>(0);
  const [currTurn, setCurrTurn] = useState<1 | 2>(1);
  const [playerAnswer, setPlayerAnswer] = useState<number>();
  const [chaserAnswer, setChaserAnswer] = useState<number>();
  const [haveAnswered, setAnswered] = useState<{ player: boolean; chaser: boolean }>({
    player: false,
    chaser: false,
  });
  const [currPlayerBGColor, setCurrPlayerBGColor] = useState<'danger' | 'primary'>('primary');
  const [amountSelected, setAmountSelected] = useState<number>();
  const [board, setBoard] = useState<IStepProps[]>(baseBoardCopy);

  const correctAnswer = questionsDB[questionIdx].correctAnswer;

  useEffect(() => {
    if (board.length == 1 && amountSelected) {
      if (board[0]['name'] == 'money') {
        setTotalMoney((prev) => prev + amountSelected);
        setNumPlayersThrough((prev) => prev + 1);
      }
      setPlayerIndex((index) => index + 1);
      baseBoardCopy = structuredClone(baseBoard);
      setBoard(baseBoardCopy);
      setAmountSelected(0);

      if (playerIndex == NUM_PLAYERS - 1) {
        console.log('here');
        setTotalMoneyFinal(totalMoney + amountSelected);
        if (board[0]['name'] == 'money') setNumPlayersThroughFinal(numPlayersThrough + 1);
        else setNumPlayersThroughFinal(numPlayersThrough);
        setStageOneRunning(false);
      }
    }
  }, [board]);

  const updateStepName = (idx: number, value: TStepName) => {
    if (!board) return;
    let tempBoard = [...board];
    tempBoard[idx].name = value;
    setBoard(tempBoard);
  };

  const onSelectAns = (idx: number): void => {
    if (currTurn === 1) {
      setAnswered((prev) => ({ ...prev, player: true }));
      setPlayerAnswer(idx);
    } else if (currTurn === 2) {
      setAnswered((prev) => ({ ...prev, chaser: true }));
      setChaserAnswer(idx);
    }

    setCurrTurn((prev) => (prev === 1 ? 2 : 1));
  };

  const updateBoard = (): void => {
    if (questionIdx < questionsDB.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }

    const playerAnsweredCorrectly = playerAnswer === correctAnswer;
    const chaserAnsweredCorrectly = chaserAnswer === correctAnswer;

    let newBoard = [...board];
    if (playerAnsweredCorrectly) {
      newBoard = setPlayerDown(newBoard);
    }
    if (chaserAnsweredCorrectly) {
      newBoard = setChaserDown(newBoard);
    }
    setBoard(() => newBoard);
  };

  useEffect(() => {
    if (JSON.stringify(haveAnswered) != JSON.stringify({ player: true, chaser: true })) return;

    if (haveAnswered.player && haveAnswered.chaser) {
      updateBoard();
      setAnswered({ player: false, chaser: false });
    }
  }, [haveAnswered]);

  useEffect(() => {
    setCurrPlayerBGColor(currTurn === 1 ? 'primary' : 'danger');
  }, [currTurn]);

  return (
    <div className="container text-center">
      <div>
        <div className="upper-left-text text-light ">
          <p className="fw-bold fs-3">{`${playerIndex + 1} / ${NUM_PLAYERS}`}</p>
        </div>
        <Title size={1} content={`${APPLE}${formatCurrency(totalMoney)}`} />
        <div className={`row pt-5 d-flex ${amountSelected ? 'flex-row-reverse' : ''}`}>
          <div className="col-md-6 d-flex justify-content-start">
            <GameBoard
              setPrice={setAmountSelected}
              btnDisabled={!!amountSelected}
              board={board}
              updateStepName={updateStepName}
            />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            {!!amountSelected && (
              <div className="align-center">
                <div className="pb-5">
                  <Title
                    content={currTurn == 1 ? `Player` : 'Chaser'}
                    size={4}
                    backgroundColor={currPlayerBGColor}
                  />
                  <Question question={questionsDB[questionIdx].question} key={questionIdx} />
                  <Answers answers={questionsDB[questionIdx].answers} handleClick={onSelectAns} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageOne;
