import type { IStepProps } from './Step';
const NIS_ICON = '₪';

export const baseBoard: IStepProps[] = [
  {
    name: 'chaser',
    photoURL: '../src/dudi_chaser.PNG',
    dimensions: {
      width: 540,
      leftCorner: 94,
      rightCorner: 6,
    },
  },
  {
    name: 'blank',
    dimensions: {
      width: 475,
      leftCorner: 93.6,
      rightCorner: 6.4,
    },
  },
  {
    price: 150000,
    text: `${NIS_ICON} 150.000`,
    name: 'presentMoney',
    dimensions: {
      width: 415,
      leftCorner: 93,
      rightCorner: 7,
    },
  },
  {
    price: 30000,
    text: `${NIS_ICON} 30.000`,
    name: 'presentMoney',
    dimensions: {
      width: 358,
      leftCorner: 92,
      rightCorner: 8,
    },
  },
  {
    price: 10000,
    text: `${NIS_ICON} 10.000`,
    name: 'presentMoney',
    dimensions: {
      width: 300,
      leftCorner: 91,
      rightCorner: 9,
    },
  },
  {
    name: 'blank',
    dimensions: {
      width: 248,
      leftCorner: 90,
      rightCorner: 10,
    },
  },
  {
    name: 'blank',
    dimensions: {
      width: 200,
      leftCorner: 89.5,
      rightCorner: 10.5,
    },
  },
  {
    text: 'בנק',
    name: 'money',
    dimensions: {
      width: 158,
      leftCorner: 89,
      rightCorner: 12,
    },
  },
];

interface IQuestions {
  question: string;
  answers: [string, string, string];
  correctAnswer: number;
}

export const questionsDB: IQuestions[] = [
  {
    question: 'lorem?',
    answers: ['one', 'two', 'three'],
    correctAnswer: 0,
  },
  {
    question: 'ipsum?',
    answers: ['one', 'two', 'three'],
    correctAnswer: 1,
  },
  {
    question: 'delor?',
    answers: ['one', 'two', 'three'],
    correctAnswer: 2,
  },
  // {
  //   question: 'lorem?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'one',
  // },
  // {
  //   question: 'ipsum?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'two',
  // },
  // {
  //   question: 'delor?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'three',
  // },
  // {
  //   question: 'lorem?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'one',
  // },
  // {
  //   question: 'ipsum?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'two',
  // },
  // {
  //   question: 'delor?',
  //   answers: ['one', 'two', 'three'],
  //   correctAnswer: 'three',
  // },
];

export const formatCurrency = (price?: number): string => {
  return price ? price.toLocaleString() : '0';
};

const setBoardStepBlank = (board: IStepProps[], setpIdx: number): void => {
  board[setpIdx] = { name: 'blank', dimensions: board[setpIdx].dimensions };
};

export const setPlayerDown = (board: IStepProps[]): IStepProps[] => {
  let tempBoard = [...board];
  for (let idx = 0; idx < tempBoard.length; idx++) {
    if (tempBoard[idx]['name'] === 'money') {
      if (idx === tempBoard.length - 2) {
        return [
          tempBoard[idx]
        ];
      }
      tempBoard[idx + 1]['name'] = 'money';
      tempBoard[idx + 1]['text'] = tempBoard[idx]['text'];
      tempBoard[idx] = { name: 'blank', dimensions: tempBoard[idx].dimensions };

      break;
    }
  }
  return tempBoard;
};

export const setChaserDown = (board: IStepProps[]): IStepProps[] => {
  let tempBoard = [...board];
  for (let idx = 0; idx < tempBoard.length; idx++) {
    if (tempBoard[idx]['name'] === 'chaser' && tempBoard[idx].photoURL) {
      if (tempBoard[idx + 1]['name'] === 'money') {
        return [
          {
            name: 'chaser',
            photoURL: '../src/dudi_chaser.PNG',
            dimensions: {
              width: 540,
              leftCorner: 94,
              rightCorner: 6,
            },
          },
        ];
      }
      console.log('in here');
      tempBoard[idx + 1]['name'] = 'chaser';
      tempBoard[idx + 1]['photoURL'] = tempBoard[idx]['photoURL'];
      delete tempBoard[idx].photoURL;
      console.log(tempBoard, 'in utills setchserdown');
      break;
    }
  }
  return tempBoard;
};
