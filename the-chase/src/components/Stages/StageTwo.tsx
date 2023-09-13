import React, { useEffect, useState } from 'react';
import Answers from '../Answers';
import AnswersGrid from '../AnswersGrid';
import Question from '../Question';
import Timer from '../Timer';
import Title from '../Title';
import { booleanQuestions, formatCurrency } from '../utils';

const CHASER_PHOTO = '../src/dudi_chaser.PNG';
const CYBER_PHOTO = '../src/Lahav_433_Logo.png';
const START_TIME = 120;

interface Props {
  totalMoney: number;
  numPlayersThrough: number;
  setNumPlayersAnswers: (param: number) => void;
  setNumChaserAnswers: (param: number) => void;
  setStageTwoRunning: (param: boolean) => void;
}

const StageTwo: React.FC<Props> = ({
  totalMoney,
  numPlayersThrough,
  setNumPlayersAnswers,
  setNumChaserAnswers,
  setStageTwoRunning,
}: Props) => {
  const [turn, setTurn] = useState<0 | 1>(0);
  const [turnFinished, setTurnFinished] = useState<boolean>(false);
  const [time, setTime] = useState(START_TIME);
  const [questionIdx, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<number>();
  const [haveAnswered, setHaveAnswered] = useState<boolean>(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(numPlayersThrough);
  const [numPlayerCorrectAnswers, setNumPlayerCorrectAnswers] = useState(numPlayersThrough);
  const photo = turn == 0 ? CYBER_PHOTO : CHASER_PHOTO;

  const onSelectAns = (idx: number): void => {
    setAnswer(idx);
    setHaveAnswered(true);
  };

  useEffect(() => {
    if (!turnFinished) return;
    if (turn == 0) {
      setTurn(1);
      setNumPlayersAnswers(numCorrectAnswers);
      setNumPlayerCorrectAnswers(numCorrectAnswers);
      setNumCorrectAnswers(0);
      setTime(START_TIME);
      setTurnFinished(false);
    } else {
      setNumChaserAnswers(numCorrectAnswers);
      setStageTwoRunning(false);
    }
  }, [turnFinished]);

  useEffect(() => {
    if (!haveAnswered) return;
    if (answer == 0) {
      if (turn == 1 && numCorrectAnswers == numPlayerCorrectAnswers - 1) {
        setNumChaserAnswers(numCorrectAnswers + 1);
        setStageTwoRunning(false);
      }
      setNumCorrectAnswers((prev) => prev + 1);
      if (turn == 0) setNumPlayerCorrectAnswers((prev) => prev + 1);
    }

    setHaveAnswered(false);

    if (questionIdx < booleanQuestions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  }, [haveAnswered]);

  return (
    <>
      <div className="container">
        <Title size={1} content={`₪${formatCurrency(totalMoney)}`} />
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <img width={150} height={150} className="rounded-circle" alt="avatar1" src={photo} />
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col pb-5">
              <Timer key={turn} expiryTimestamp={time} setTurnFinished={setTurnFinished} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <AnswersGrid
          key={0}
          numCorrectAnswers={numPlayerCorrectAnswers}
          competitor={"players"}
        />
      </div>
      {turn == 1 && (
        <div className="p-3">
          <AnswersGrid key={1} numCorrectAnswers={numCorrectAnswers} competitor={'chaser'} />
        </div>
      )}
      <div className="container">
        <div className="row flex-row-reverse d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            {/* <Title size={1} content={`₪${formatCurrency(player1Money)}`} /> */}
            <div className="d-flex justify-content-center">
              <div className="pb-5">
                <Question question={booleanQuestions[questionIdx]} key={questionIdx} />
                <Answers answers={['נכון', 'לא נכון']} handleClick={onSelectAns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StageTwo;
