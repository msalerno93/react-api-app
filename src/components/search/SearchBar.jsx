import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"

const SearchBar = () => {
  return (
    <Container sx={{width: '40%', paddingBottom: '10px', paddingTop: '10px'}}>
      <TextField hiddenLabel fullWidth size="small" id="filled-basic" label="Search Pokemon" sx={{bgcolor: '#dedede' }} />
    </Container>
  )
}

export default SearchBar