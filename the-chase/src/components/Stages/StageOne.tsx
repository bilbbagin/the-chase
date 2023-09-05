import React, { useEffect, useState } from 'react';
import Answers from '../Answers';
import CustonModal, { IModalProps } from '../CustomModal';
import GameBoard from '../GameBoard';
import Question from '../Question';
import { IStepProps, TStepName } from '../Step';
import Title from '../Title';
import { baseBoard, questionsDB, setChaserDown, setPlayerDown } from '../utils';

const StageOne: React.FC = () => {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
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
  const [board, setBoard] = useState<IStepProps[]>(baseBoard);
  const [player1Money, setPlayer1Money] = useState<number>(0);
  const [chaserMoney, setChaserMoney] = useState<number>(0);

  const correctAnswer = questionsDB[questionIdx].correctAnswer;

  useEffect(() => {
    if (board) {
      
    }
  }, [board]);

  const updateStepName = (idx: number, value: TStepName) => {
    if (!board) return;
    let tempBoard = [...board];
    tempBoard[idx].name = value;
    setBoard(tempBoard);
  };

  const onSelectAns = (idx: number): void => {
    // setAnsSettings({ ...ansSettings, color: 'info', ansIdx: idx });

    setTimeout(() => {
      // setAnsSettings({ ...ansSettings, color: '' });
      const selectedAnswer = questionsDB[questionIdx].answers[idx];

      if (currTurn === 1) {
        setAnswered((prev) => ({ ...prev, player: true }));
        setPlayerAnswer(idx);
      } else if (currTurn === 2) {
        setAnswered((prev) => ({ ...prev, chaser: true }));
        setChaserAnswer(idx);
      }

      setCurrTurn((prev) => (prev === 1 ? 2 : 1));
    }, 500);
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
      setPlayer1Money((prev) => prev + (amountSelected ? amountSelected : 0));
    }
    if (chaserAnsweredCorrectly) {
      newBoard = setChaserDown(newBoard);
      setChaserMoney((prev) => prev + (amountSelected ? amountSelected : 0));
    }
    setBoard(() => newBoard);
  };

  // const changeBoard = (newBoard: IStepProps[]) => {
  //   const up
  // }

  useEffect(() => {
    if (JSON.stringify(haveAnswered) != JSON.stringify({ player: true, chaser: true })) return;
    console.log(haveAnswered.player, 'player 1');
    console.log(haveAnswered.chaser, 'player 2');

    if (haveAnswered.player && haveAnswered.chaser) {
      updateBoard();
      setAnswered({ player: false, chaser: false });
    }
  }, [haveAnswered]);

  useEffect(() => {
    setCurrPlayerBGColor(currTurn === 1 ? 'primary' : 'danger');
  }, [currTurn]);

  return (
    <>
      <div className="grid gap-3 d-flex flex-row-reverse">
        <div className="p-5 g-col-6">
          <GameBoard
            setPrice={setAmountSelected}
            btnDisabled={!!amountSelected}
            board={board}
            updateStepName={updateStepName}
          />
        </div>
        {!!amountSelected && (
          <div className="align-center">
            <div className=" p-5 g-col-6">
              {/* <Counter amount={formatCurrency(amountSelected)} /> */}
              <Title
                content={`Player ${currTurn}'s turn`}
                size={4}
                backgroundColor={currPlayerBGColor}
              />
              <Question question={questionsDB[questionIdx].question} key={questionIdx} />
              <Answers
                answers={questionsDB[questionIdx].answers}
                handleClick={onSelectAns}
                // ansClickSettings={ansSettings}
                correctAnsIdx={correctAnswer}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StageOne;
