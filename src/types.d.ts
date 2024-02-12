export interface QuizQuestion {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: number;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
    
  }
