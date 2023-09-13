import React from 'react';
import Card from 'react-bootstrap/Card';
import { questionsDB } from './utils';

interface Props {
  question: string;
}

const Question = ({ question }: Props) => {
  return (
    <Card body className="d-flex bg-dark text-light font-weight-bold" style={{ width: 700 }}>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
        <p className="fw-bold text-white m-0 fs-4">{question}</p>
      </div>
    </Card>
  );
};

export default Question;

{
  /* <div className="text-light pt-5">
                  {questionIdx + 1}/{questionsDB.length}
                </div> */
}
