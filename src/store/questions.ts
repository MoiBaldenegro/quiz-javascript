import {create} from "zustand";
import { QuizQuestion } from "../types";
import confetti from "canvas-confetti";

interface State {
    questions: QuizQuestion[];
    currentQuestion: number;
    fetchQuestions: (limit:number)=> Promise<void>;
    selectAnswer: (id: number, index: number)=> void;
    setNextQuestion: ()=> void;
    setPreviousQuestion: ()=> void;
}

export const UseQuestionsStore = create<State>((set, get)=>{
    return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async (limit: number)=> {
           const res = await fetch("http://localhost:5173/data.json")
           const json  = await res.json();
           const questions = await json.sort(()=> Math.random() - 0.5 ).slice(0, limit)
           set({questions: questions})
        },
        selectAnswer : (id: number, answerIndex : number)=>{
            const state = get();
            const questions = structuredClone(state.questions);
            const questionIndex = questions.findIndex((element)=> element.id = id);
            const updateQuestion = questions[questionIndex];

            const isCorrect = updateQuestion.correctAnswer === answerIndex;
            if(isCorrect) confetti();

            questions[questionIndex] = {
                ...updateQuestion,
                isCorrectUserAnswer: isCorrect,
                userSelectedAnswer: answerIndex
            }
            set({ questions: questions})
        },
        setNextQuestion: ()=>{
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;
            if(currentQuestion <= questions.length){
                set({currentQuestion: nextQuestion})
            }

        },
        setPreviousQuestion: ()=>{
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;
            if(currentQuestion >= 0 ){
                set({currentQuestion: previousQuestion})
            }

        }

    
    }
})



