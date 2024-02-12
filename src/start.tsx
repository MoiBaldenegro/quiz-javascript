import { Button } from "@mui/material"
import { UseQuestionsStore } from "./store/questions"

export default function Start(){

    const { fetchQuestions } = UseQuestionsStore();
    return(
        <Button onClick={()=> {fetchQuestions(5)}} variant="contained">
            Comenzar

        </Button>
    )
}