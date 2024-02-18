import { IconButton, List, Stack } from "@mui/material";
import { UseQuestionsStore } from "../../questions";
import Question from "../question/question";
import { useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";


export default function Game(){
    const  questions = UseQuestionsStore(state => state.questions);
    const nextQuestion = UseQuestionsStore(state => state.setNextQuestion);
    const previousQuestion = UseQuestionsStore(state => state.setPreviousQuestion);
    const numberQuestion = UseQuestionsStore(state => state.currentQuestion);
    const currentQuestion = questions[numberQuestion]

    useEffect(()=>{
        console.log(questions)
        console.log(numberQuestion)
        console.log(currentQuestion)
    })
    return(
        <div>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                <IconButton onClick={previousQuestion} disabled={numberQuestion === 0}>
                    <ArrowBackIosNew/>
                </IconButton>
                {numberQuestion + 1} / {questions.length} 
                <IconButton onClick={nextQuestion} disabled={numberQuestion >= questions.length - 1}>
                    <ArrowForwardIos/>
                </IconButton>
            </Stack>
            <Question info={currentQuestion} />
            
        </div>
    )
}