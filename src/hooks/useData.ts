import { UseQuestionsStore } from "../store/questions";



export default function UseData(){
    const questions = UseQuestionsStore(state => state.questions);
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((element)=>{
        const { userSelectedAnswer, correctAnswer } = element;
       if(userSelectedAnswer == null) unanswered++;
        else if(userSelectedAnswer === correctAnswer) correct++;
        else incorrect ++
    })

    return { correct, incorrect, unanswered}
}