import type { IStepProps } from './Step';
export const APPLE = '🍎';

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
    price: 1000000,
    text: `${APPLE} 1,000,000`,
    name: 'presentMoney',
    dimensions: {
      width: 415,
      leftCorner: 93,
      rightCorner: 7,
    },
  },
  {
    price: 3000,
    text: `${APPLE} 3,000`,
    name: 'presentMoney',
    dimensions: {
      width: 358,
      leftCorner: 92,
      rightCorner: 8,
    },
  },
  {
    price: 1000,
    text: `${APPLE} 1,000`,
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

export const booleanQuestionsTemp: string[] = [
  '?כמה תקיעות תוקעים בסך הכל',
  '?בצאת איזה חג נהוג להתחיל לבנות את הסוכה',
  '?איך נקראים סוגי התקיעות השונים',
  '?כמה חגים יש בחודש תשרי',
  '?מה המצווה העיקרית בראש השנה',
  '?איך קוראים לימים שבין ראש השנה ליום כיפור ',
  '?מאיזו מילה נגזרת המילה שופר',
  '?מה מסמלת אכילת תפוח בדבש',
  '"השלם:"שנה טובה שנה באה ואני כפיי____,שנה טובה לך אבא,שנה טובה לך,אמא..',
  '______השלם: שלומית בונה סוכה, מוארת ו',
  'מהו התאריך העברי שבו חל ראש השנה',
  '"_______השלם:"שנהיה לראש ולא ל',
  '?איזה ספר קוראים בראש השנה',
  '?כמה ימים חל ראש השנה',
  '?כמה איסורים יש ביום כיפור',
  '?מאיזה גיל זכרים מצווים לצום',
  '?כמה תפילות יש ביום כיפור',
  '?מה מאחלים ביום כיפור',
  '?מהם ארבעת המינים',
  '?כמה אושפיזין יש בסוכות',
  '?מנו 4 מן האושפיזין',
  '?מהם שלושת הרגלים',
  '?מה השם הנוסף של חג הסוכות',
  '?מאיזה עץ לקוח הלולב',
  '?מהי התפילה החמישית ביום כיפור',
  '?איזה סוג נעליים אסור לנעול ביום כיפור',
  '?כיצד נקראת הסעודה שלפני כניסת הצום',
  '?מהם הימים הנוראיים',
  '"השלם את המשפט: "מי שלא ראה שמחת בית השואבה',
  '?למה אוכלים סלק בראש השנה',
  '?באיזה תאריך חל יום הכיפורים',
  '?כמה ימים אורך חג הסוכות',
  '?מה הראשי תיבות של אלול',
  '?איך קוראים לסידור תפילות החג של ראש השנה',
  '?איך קוראים לספר בו נכתבים בראש השנה',
  '?מה היום הכי קדוש בשנה העברית',
  '?מי היחיד שרשאי להיכנס לקודש הקודשים ביום כיפור',
  '?באיזה צבע נהוג להתלבש ביום כיפור',
  '?האם יום כיפור נחשב יום חג',
  '?כמה שעות אורך צום יום כיפור',
  '?האם המילה סוכות מוזכרת בתורה',
  '"השלם: "עננו אלוהי _____ עננו',
  '?השלם: חטאנו לפניך, ____ עלינו',
  '?האם תוקעים בשופר בשבת',
  '?מדוע אוכלים ראש של דג',
  '?בראש השנה פרחה _____ אצלי בגינה',
  '?למה יום כיפור נקרא כך',
  '?האם מותר להתקלח ביום כיפור',
  '?מה החודש הראשון לפי התורה',
  '?באיזו שנה פרצה מלחמת יום הכיפורים',
  '?מי הייתה ראשת הממשלה במלחמת יום כיפור',
];

export const questionsDBTemp: IQuestions[] = [
  {
    question: '?באיזה שם נוסף מכונה חודש תשרי ע"פ התורה',
    answers: ['בראשית עולם', 'החודש הראשון', 'החודש השביעי'],
    correctAnswer: 2,
  },
  {
    question: '"...השלם: "כל השביעין',
    answers: ['תקילין', 'חביבין', 'שמחין'],
    correctAnswer: 1,
  },
  {
    question: '?מה נהוג ביום הראשון של ראש השנה לאחר מנחה',
    answers: ['ערבית', 'תשליך', 'כפרות'],
    correctAnswer: 1,
  },
  {
    question: '?לזכר מה תוקעים בשופר',
    answers: ['משה במעמד הר סיני', 'בליעת יונה על ידי הלוויתן', 'עקדת יצחק'],
    correctAnswer: 2,
  },
  {
    question: '?מה עושים עם ארבעת המינים',
    answers: ['טוחנים', 'אוכלים', 'מנענעים'],
    correctAnswer: 2,
  },
  {
    question: '?מה המטרה בתשליך',
    answers: ['השלכת החטאים למים', 'להיפטר מפסולת', 'טבילה במקווה'],
    correctAnswer: 0,
  },
  {
    question: '?מה מברכים על הרימון',
    answers: ['שירבו זכויותינו כרימון', 'שירבו ניצחונותינו כרימון', 'שירבו ימינו כרימון'],
    correctAnswer: 0,
  },
  {
    question: '?מה שמים מעל הסוכה',
    answers: ['ברזנט', 'סכך', 'טלית'],
    correctAnswer: 1,
  },
  {
    question: '?מה אדם מצווה לעשות בסוכה',
    answers: ['לגור', 'לבקר', 'לקשט'],
    correctAnswer: 0,
  },
  {
    question: '?מה השם של הקצה של האתרוג',
    answers: ['פומית', 'חיתם', 'פיטם'],
    correctAnswer: 2,
  },
  {
    question: '?לאיזה אחד מארבעת המינים אין טעם וריח',
    answers: ['אתרוג', 'ערבה', 'לולב'],
    correctAnswer: 1,
  },
  {
    question: '?באיזה תאריך עברי חל שמחת תורה',
    answers: ['כ"ב תשרי', "ב' בניסן", "ג' בתשרי"],
    correctAnswer: 0,
  },
  {
    question: '?באיזה תאריך עברי חל צום גדליה',
    answers: ["א' תשרי", "ד' תשרי", "ג' תשרי"],
    correctAnswer: 2,
  },
  {
    question: '?באיזו תקופת שלטון חי גדליה',
    answers: ['היוונים', 'הבבלים', 'הרומאים'],
    correctAnswer: 1,
  },
  {
    question: '?מה שם משפחתו של גדליה אשר עליו צמים',
    answers: ['בן אחיקם', 'בן יפונה', 'בן עמר'],
    correctAnswer: 0,
  },
  {
    question: '?איזו שמחה יש בשמיני עצרת',
    answers: ['שמחת פורים', 'שמחת תורה', 'שמחת השבת'],
    correctAnswer: 1,
  },
  {
    question: '?באיזו יד מחזיקים את הלולב',
    answers: ['שמאל', 'השלישית', 'ימין'],
    correctAnswer: 2,
  },
  {
    question: '?כיצד נקרא היום האחרון של סוכות',
    answers: ['שמיני עצרת', 'הושענא רבה', 'שמחת תורה'],
    correctAnswer: 1,
  },
  {
    question: '?למה השופר שימש בעת העתיקה',
    answers: ['לכנס קהל לטקסים.', 'להכריז על כניסת השבת ', 'להכריז על יציאה למלחמה'],
    correctAnswer: 2,
  },
  {
    question: '?באיזה תאריך חל חג הסוכות',
    answers: [': י"ד בתשרי', "יא' תשרי", "א' תשרי"],
    correctAnswer: 0,
  },
  {
    question: '?מה מבין הבאים אינו מנהג של ראש השנה',
    answers: ['אכילת בשר בקר', 'התרת נדרים', 'תשליך'],
    correctAnswer: 0,
  },
  {
    question: '?מה משמעות המילה אושפיזין ',
    answers: ['מאושפזים', 'צדיקים', 'אורחים'],
    correctAnswer: 2,
  },
  {
    question: '?איזו מגילה נהוג לקרוא בשבת של חוה"מ סוכות ',
    answers: ['אסתר', 'קהלת', 'רות'],
    correctAnswer: 1,
  },
  {
    question: '?איך נקרא ראש השנה בתורה',
    answers: ['זיכרון תרועה', 'יום ירושלים', 'יום הרגלים'],
    correctAnswer: 0,
  },
  {
    question: '?איזו מילה נרדפת למילה שופר בתנ"ך',
    answers: ['קרן', 'יובל', 'עוגב'],
    correctAnswer: 1,
  },
  {
    question: '?(קישוט שולחן)מה המילה העברית לראנר ',
    answers: ['שבילה', 'רצרץ  ', 'מפייה'],
    correctAnswer: 0,
  },
  {
    question: 'מה מהבאים הוא לא מסימני ראש השנה',
    answers: ['רימון', 'שקדים', 'תפוח בדבש'],
    correctAnswer: 1,
  },
  {
    question: '?איזו הופעה יש בפארק הירקון בחול המועד סוכות',
    answers: ['ביונסה', 'סטפן', 'ברונו מארס'],
    correctAnswer: 2,
  },
];

const shuffleQuestions = (array: IQuestions[]): IQuestions[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const shuffleBooleanQuestions = (array: string[]): string[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const questionsDB: IQuestions[] = shuffleQuestions(questionsDBTemp);
export const booleanQuestions: string[] = shuffleBooleanQuestions(booleanQuestionsTemp);

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
        return [tempBoard[idx]];
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
