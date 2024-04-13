import {
  Box, 
  useTheme, 
  useMediaQuery, 
  Typography, 
  TextField, 
  Container, 
  InputAdornment,
  Button,
} from "@mui/material";

// import {VisuallyHiddenInput} from "@mui/utils";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Header from "../../components/Header";
// import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';



const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;  

const DailyWorkerForm = () => {

  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <box>
      <Header/>

      <Typography fontWeight="bold" fontSize="32px" color="primary" marginTop={5} marginLeft={
        isNonMobile?
        "10em":"4rem"
        }>Daily Worker Form</Typography>

      {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        This Box renders as an HTML section element.
      </Box> */}
    <Container maxWidth="lg"  sx={{
      display:"flex",
      justifyContent:"space-around",
      marginTop:"1rem"
    }}>

      <TextField
        label="username"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25rem' }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
          // readOnly:true
        }}
        variant="outlined" 
        disabled
      // value={"hi"}
      />
      
      <TextField
        
        label="phone-number"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25rem' }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
          // readOnly:true
        }}
        variant="outlined" 
        disabled
        // value={"hi"}
        />
    </Container>

    <Container maxWidth="lg"  sx={{
      marginLeft:"16rem",
      marginTop:"1em",
    }}>
      
      <h3 style={{
        // marginLeft:"5rem",
        // marginTop:"1rem"
      }}> Uploade Identity Proof:</h3>  
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        style={{
          width:"30%"
        }}
      > 
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Container>

    <Container maxWidth="xl" style={{textAlign:"center", marginTop:"6rem"}}>
      <Button variant="contained" style={{width:"30%"}}>submit</Button>
    </Container>

    </box>
  );
};

export default DailyWorkerForm;
