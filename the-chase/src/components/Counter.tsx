import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  amount: string;
}

const Counter = ({ amount }: Props) => {
  return (
    <div className="d-flex justify-content-center w-50 h-50 pb-5">
      <Button variant="danger">
        <span className="count-value">{amount}</span>
      </Button>
    </div>
  );
};

export default Counter;
