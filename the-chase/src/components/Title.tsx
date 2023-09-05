import React from 'react';
import { Badge } from 'react-bootstrap';
import './Stages/StepOne.css';

interface Props {
  content: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  backgroundColor: 'danger' | 'primary';
}

function Title({ content, size, backgroundColor }: Props) {
  return (
    <div className={`display-${size} lead pb-5`}>
      <Badge bg={backgroundColor}>{content}</Badge>
    </div>
  );
}

export default Title;
