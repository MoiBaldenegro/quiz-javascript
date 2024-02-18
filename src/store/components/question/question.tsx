// question cmponent
// MUI Components
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//Hooks
import { useEffect } from "react"
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { UseQuestionsStore } from "../../questions";
import { QuizQuestion } from "../../../types";



export default function Question({info}: any){
    const selectAnswer = UseQuestionsStore(state => state.selectAnswer)
    const handleclick = (indexAsnwer: number ) => () => {
        selectAnswer(info.id, indexAsnwer)
    }
    const getBackground = (info: QuizQuestion, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info;
        if(userSelectedAnswer == null) return "transparent";
        if(index != correctAnswer && index != userSelectedAnswer) return "red";
        if(index === correctAnswer) return "green";
        if(index === userSelectedAnswer) return "red";
 
        return "transparent"
    }
  
    return(
            <Card variant="outlined" sx={{ textAlign:"left", bgcolor: "#333", padding: "25px"}}>
                <Typography variant="h4" component="h1">{info.question}</Typography>
                <SyntaxHighlighter language="javascript" style={gradientDark}>
                    {info.code}
                </SyntaxHighlighter>
                <List sx={{bgcolor: "#45d"}}>
                {info.answers.map((element : any, index : any)=>(
                <ListItem key={index} divider>
                    <ListItemButton disabled={info.userSelectedAnswer != null && info.userSelectedAnswer != index} onClick={handleclick(index)} sx={{backgroundColor: getBackground(info, index)}}>
                        <ListItemText primary={element}/>
                    </ListItemButton>
                </ListItem>

                ))}
               
                    
                

            </List>
            </Card>

    );
}