import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  answers: string[];
  handleClick: (idx: number) => void;
  ansClickSettings?: { ansIdx?: number; color?: string };
}

const Answers: React.FC<Props> = ({ answers, handleClick, ansClickSettings }: Props) => {
  return (
    <div className="grid gap-3 d-flex">
      {answers.map((answer, idx) => {
        const isSelected = ansClickSettings?.ansIdx === idx;
        const borderColorClass =
          isSelected && ansClickSettings?.color ? `border-${ansClickSettings.color}` : '';
        const btnStyle: React.CSSProperties = {
          width: '100%',
          minWidth: '220px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        };

        return (
          <div key={idx} style={{ width: '100%' }}>
            <Button
              onClick={() => handleClick(idx)}
              className={`border ${borderColorClass} fw-bold`}
              variant={answers.length == 2 ? (idx == 0 ? 'success' : 'danger') : 'dark'}
              style={btnStyle}
            >
              {answer}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
