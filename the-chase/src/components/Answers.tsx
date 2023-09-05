import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  answers: string[];
  handleClick: (idx: number) => void;
  ansClickSettings?: { ansIdx?: number; color?: string };
  correctAnsIdx?: number;
}

const Answers: React.FC<Props> = ({
  answers,
  handleClick,
  ansClickSettings,
  correctAnsIdx,
}: Props) => {
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
              className={`border ${borderColorClass}`}
              variant={correctAnsIdx ? 'success' : 'dark'}
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
