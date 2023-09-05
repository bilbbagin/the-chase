import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Step, { type IStepProps, type TStepName } from './Step';
import { baseBoard, setChaserDown, setPlayerDown } from './utils';

interface IGameBoardProps {
  setPrice: (price?: number) => void;
  btnDisabled: boolean;
  board?: IStepProps[];
  updateStepName: (idx: number, value: TStepName) => any;
}

const GameBoard = ({ setPrice, btnDisabled, board, updateStepName }: IGameBoardProps) => {
  const handleClick = (stepIdx: number, price?: number) => {
    if (!board) return;
    setPrice(price);
    if (board[stepIdx].name === 'blank') return;
    if (stepIdx < 2 && stepIdx > 4) return;
    for (let idx = 2; idx <= 4; idx++) {
      updateStepName(idx, idx !== stepIdx ? 'blank' : 'money');
    }
  };

  return (
    <>
      <div className="d-flex align-items-center flex-column justify-content-between">
        {board &&
          board.map((step: IStepProps, idx) => {
            return (
              <Button
                onClick={() => handleClick(idx, step.price)}
                className="bg-transparent border-0 p-0 m-0"
                key={idx}
                disabled={btnDisabled}
              >
                <Step
                  key={idx}
                  name={step.name}
                  text={step.text}
                  photoURL={step.photoURL}
                  dimensions={step.dimensions}
                />
              </Button>
            );
          })}
      </div>
    </>
  );
};

export default GameBoard;
