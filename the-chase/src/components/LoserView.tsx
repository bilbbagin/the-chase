import React from 'react';
import Card from 'react-bootstrap/Card';
import AnswersGrid from './AnswersGrid';
import { Language } from 'linkedin-private-api';
import Title from './Title';
import { APPLE, formatCurrency } from './utils';
import { Badge } from 'react-bootstrap';
import './Winner.css';

interface Props {
  numCorrectAnswers: number;
}

const CHASER_PHOTO = '../src/dudi_chaser.PNG';

const LoserView = ({ numCorrectAnswers }: Props) => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 gradient-background">
      <div className="p-5">
        <div className="mt-3 p-5"> {/* Increased padding */}
          <div className="d-flex align-items-center justify-content-center">
            <img
              width={150}
              height={150}
              className="rounded-circle"
              alt="avatar1"
              src={CHASER_PHOTO}
            />
            <div className="ms-4">
              <div className={`display-1 lead pb-8`}>
                <Badge bg={'bg-light-subtle'} style={{ fontSize: '10rem' }}>{`!הפסד`}</Badge>
              </div>
            </div>
          </div>
        </div>

        <AnswersGrid numCorrectAnswers={numCorrectAnswers} competitor="chaser" />
        
        <div className="mt-4 p-5"> {/* Adjust margin and padding */}</div>
      </div>
    </div>
  );
};

export default LoserView;
