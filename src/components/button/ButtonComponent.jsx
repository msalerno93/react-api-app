import Button from '@mui/material/Button';

const ButtonComponent = ({buttonName}) => {


  return (
    <Button sx={{marginBottom: "10px"}} variant="contained">{buttonName} Details</Button>
  )
}

export default ButtonComponent