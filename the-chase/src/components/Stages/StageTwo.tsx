import React, { useState, useEffect } from 'react';
import Answers from '../Answers';
import Question from '../Question';
import Title from '../Title';
import { questionsDB } from '../utils';

const StageTwo: React.FC = () => {
  const [questionIdx, setQuestionIndex] = useState(0);
  const [currTurn, setCurrTurn] = useState("Player 1's turn");
  const [player1Answers, setPlayer1Answers] = useState<string[]>([]);
  const [player2Answers, setPlayer2Answers] = useState<string[]>([]);
  const [answered, setAnswered] = useState<{ player1: boolean; player2: boolean }>({
    player1: false,
    player2: false,
  });
  const [winner, setWinner] = useState<string | null>(null);

  const onSelectAns = (idx: number, player?: number): void => {
    const selectedAnswer = questionsDB[questionIdx].answers[idx];

    if (player === 1) {
      setPlayer1Answers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setAnswered((prev) => ({ ...prev, player1: true }));
    } else if (player === 2) {
      setPlayer2Answers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setAnswered((prev) => ({ ...prev, player2: true }));
    }

    if (answered.player1 && answered.player2) {
      determineWinner();
      setTimeout(() => {
        setAnswered({ player1: false, player2: false });
        setWinner(null);

        if (questionIdx + 1 < questionsDB.length) {
          setQuestionIndex(questionIdx + 1);
        }
      }, 1500);
    }
  };

  const determineWinner = (): void => {
    const player1Answer = player1Answers[player1Answers.length - 1];
    const player2Answer = player2Answers[player2Answers.length - 1];
    const correctAnswer = questionsDB[questionIdx].correctAnswer;

    if (player1Answer === player2Answer) {
      setWinner("It's a tie!");
    } else if (player1Answer === correctAnswer) {
      setWinner('Player 1 wins!');
    } else if (player2Answer === correctAnswer) {
      setWinner('Player 2 wins!');
    }
  };

  useEffect(() => {
    setPlayer1Answers([]);
    setPlayer2Answers([]);
  }, [questionIdx]);

  return (
    <>
      <Title content={currTurn} size={4} />
      <Question question={questionsDB[questionIdx].question} key={questionIdx} />
      <Answers
        answers={questionsDB[questionIdx].answers}
        handleClick={(idx, player) => onSelectAns(idx, player)}
        ansClickSettings={{
          idx: answered.player1 ? player1Answers.length - 1 : -1,
          player: answered.player2 ? player2Answers.length - 1 : -1,
        }}
      />
      {winner && <p>Winner: {winner}</p>}
    </>
  );
};

export default StageTwo;
