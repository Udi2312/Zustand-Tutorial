import './App.css'
// import useHabitStore from './store/store'
import {Box , Container, Typography } from "@mui/material"
import AddHabitForm from './components/add-habit-form'

function App() {
  // const store = useHabitStore();
  return (
    <Container>
      <Box>
        <Typography variant = "h2" component="h1" gutterBottom align = "center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
      </Box>
    </Container>
  )
}

export default App
