import React from 'react';
import './Step.css';

export type TStepName = 'chaser' | 'bank' | 'money' | 'blank' | 'presentMoney';
const colors = {
  RED: '#990001',
  GREEN: '#15542e',
  LIGHT_BLUE: '#007fae',
  DARK_BLUE: '#092638',
};

const nameToColor: Record<TStepName, keyof typeof colors> = {
  bank: 'GREEN',
  blank: 'DARK_BLUE',
  chaser: 'RED',
  money: 'GREEN',
  presentMoney: 'LIGHT_BLUE',
};

export interface IStepProps {
  name: TStepName;
  text?: string;
  photoURL?: string;
  price?: number;
  dimensions: {
    height?: number;
    width: number;
    leftCorner: number;
    rightCorner: number;
  };
}

function Step({ text, photoURL, dimensions, name }: IStepProps) {
  const divStyle = {
    height: dimensions.height ?? 80,
    width: dimensions.width,
    clipPath: `polygon(0 0, 100% 0, ${dimensions.leftCorner}% 100%, ${dimensions.rightCorner}% 100%)`,
    background: `linear-gradient(to bottom, ${colors[nameToColor[name]]}, black)`,
  };

  const get_trapezoid_content = () => {
    if (name === 'blank') return null;
    else if (name === 'chaser') {
      {
        if (photoURL)
          return (
            <div>
              <img src={photoURL} alt="Your Image" />
            </div>
          );
      }
    } else {
      return <p className="trapezoid-text fw-bold fs-1">{text ?? ''}</p>;
    }
  };

  return (
    <div className="trapezoid d-flex justify-content-center" style={divStyle}>
      {get_trapezoid_content()}
    </div>
  );
}

export default Step;
