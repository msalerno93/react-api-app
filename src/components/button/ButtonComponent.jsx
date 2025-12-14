import Button from '@mui/material/Button';

const ButtonComponent = ({buttonName}) => {


  return (
    <Button sx={{marginBottom: "10px"}} variant="contained">{buttonName}</Button>
  )
}

export default ButtonComponent