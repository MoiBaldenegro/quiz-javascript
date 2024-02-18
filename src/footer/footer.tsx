import UseData from "../hooks/useData";
import { UseQuestionsStore } from "../store/questions";
import "./footer.module.css"



export default function Footer(){
    const onReset = UseQuestionsStore(state => state.onReset);
    const {correct, incorrect, unanswered } = UseData();
    return (
        <footer >
            <h2>{`Correctas ${correct}`}</h2>
            <h2>{`Incorrectas ${incorrect}`}</h2>
            <h2>{`Restantes ${unanswered}`}</h2>
            <button onClick={()=>{onReset()}}> Reset quiz</button>

        </footer>
    )
}