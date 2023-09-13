import React from 'react';
import './Opening.css'; // Import your CSS file
import ImageAnimation from './ImageAnimation';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  setOpeningViewRunning: (param: boolean) => void;
}

const OpeningView: React.FC<Props> = ({ setOpeningViewRunning }: Props) => {
  const [clickedOne, setClickedOne] = useState(false);

  const handleClickOne = () => {
    if (clickedOne) {
      setOpeningViewRunning(false);
    }

    setClickedOne(true);
  };

  return (
    <div>
      {/* Background and content */}
      <div className="body-background"></div>

      {clickedOne && <ImageAnimation />}
      <div className="button-container">
        <button className="start-btn fw-bold" onClick={handleClickOne}></button>
      </div>
    </div>
  );
};
export default OpeningView;
