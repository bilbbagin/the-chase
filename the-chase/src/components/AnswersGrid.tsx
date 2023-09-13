import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './temp.css';

interface Props {
  numCorrectAnswers: number;
  competitor: 'players' | 'chaser' | 'winner';
}

const AnswersGrid: React.FC<Props> = ({ numCorrectAnswers, competitor }: Props) => {

  const getAnswersStyle = () => {
    if (competitor == 'players') return 'fill-blue';
    else if (competitor == 'chaser') return 'fill-red';
    else return 'fill-green';
  };

  const getNumColumns = () => {
    if (numCorrectAnswers == 0) return 1;
    return Math.min(7, numCorrectAnswers);
  };

  return (
    <div className="container-fluid custom-container text-light border border-2 border-light rounded">
      <div className="row d-flex justify-content-center">
        {Array(getNumColumns())
          .fill(0)
          .map((elem, idx) => {
            return idx != getNumColumns() - 1 ? (
              <div key={idx} className={`col ${getAnswersStyle()} text-light`}></div>
            ) : (
              <div key={idx} className="col white-border">
                <div>
                  <p className="text-dark larger-font">{numCorrectAnswers}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnswersGrid;
