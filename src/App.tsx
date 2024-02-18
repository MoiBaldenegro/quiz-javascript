import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JsLogo } from './javascriptLogo'
import Start from './start'
import { UseQuestionsStore } from './store/questions'
import Game from './store/components/game/game'

function App() {
  const { questions } = UseQuestionsStore();
console.log(questions)


  return (
    <main>
      <Container  >
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
      <JsLogo/> 
      <Typography variant='h2' component="h1">
        Moises el crack Game
      </Typography> 

      </Stack> 
      { questions.length === 0 && <Start/>}
      {questions.length > 0 && <Game/> }
      </Container>
    </main>
  )
}

export default App
