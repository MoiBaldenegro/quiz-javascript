import {create} from "zustand";
import { QuizQuestion } from "../types";

interface State {
    questions: QuizQuestion[];
    currentQuestion: number;
    fetchQuestions: (limit:number)=> Promise<void>
}

export const UseQuestionsStore = create<State>((set)=>{
    return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async (limit: number)=> {
           const res = await fetch("http://localhost:5173/data.json")
           const json  = await res.json();
           const questions = await json.sort(()=> Math.random() - 0.5 ).slice(0, limit)
           set({questions: questions})
        }
    }
})



