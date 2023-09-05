import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  question: string;
}

const Question = ({ question }: Props) => {
  return (
    <Card body className="bg-dark text-light font-weight-bold" style={{width: 700}}>
      <p className="fw-bold text-white">{question}</p>
    </Card>
  );
};

export default Question;
