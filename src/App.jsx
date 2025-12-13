import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchBar from './components/search/SearchBar'

function App() {

  return (
    <Container sx={{bgcolor: 'white', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', height: '100vh'}}>
      <Typography variant='h3' sx={{color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}>Pokemon Search</Typography>
    <Typography variant='h6' sx={{color: 'black', fontFamily: 'cursive'}}>Search for a Pokemon and click on them to view their information!</Typography>
    <SearchBar></SearchBar>
    </Container>
  )
}

export default App
