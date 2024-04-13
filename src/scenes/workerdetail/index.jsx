import { Button, Container, TextField, Typography, backdropClasses, withStyles } from "@mui/material";
import Header from "../../components/Header"
import CallIcon from '@mui/icons-material/Call';

const WorkerDetail = () => {
    return(
        <>
            <Header/>

            <Container maxWidth="lg" style={{
                // backgroundColor:"red", 
                marginTop:"1rem", 
                justifyContent:"center",
                textAlign:"center",
                height:"2.5rem",
                }}>
                <Button variant="contained" style={{
                    width:"40%",
                    height:"inherit"
                }}>Start Scouting</Button>

            </Container>

            <Container maxWidth="lg" style={{
                marginTop:"2rem",
                justifyContent:"center",
                objectFit: "cover",
                display:"flex",
                flexDirection:"column",
                padding:0,
                }}>
                <img src="/images/mapss.jpeg" style={{
                    // width:"100%",
                    margin:0,
                    padding:0,
                    width: "100%",
                    height: "50%",
                    objectFit: "cover"
                }}  alt="alter"></img>  

                <box style={{
                    margin:"2rem",

                }}>
                    <h2 style={{fontSize:40}}>Full day house service</h2>

                    <Container maxWidth="xl"  sx={{
                        display:"flex",
                        justifyContent:"space-around",
                        marginTop:"1rem",
                        // backgroundColor:"red",
                    }}>
                    
                    {/* <img></img> */}
                    <div style={{width:"70%"}}>
                        <p>name, rating</p>
                        <div style={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"space-evenly",
                            flexDirection:"row",
                            // backgroundColor:"red",
                        }}>
                            <CallIcon fontSize="large" style={{marginTop:"8px"}}/>
                            <TextField
                                label="message worker here...."
                                name="msg"
                                />
                        </div>
                        <p>Skills: ABCD </p>
                    </div>
                    <div style={{
                        width:"20%", 
                        justifyContent:"right", 
                        textAlign:"right",
                        display:"flex",
                        flexDirection:"column",
                        paddingRight:"2rem"
                        
                    }}>
                        <p> OTP</p>
                        <h4>Pay for the job</h4>
                        <h2>Rs. 200/hr</h2>
                        <p>mode: cashe</p>
                    </div>
                    

                    </Container>
                    
                    <div style={{
                        width:"100%",
                        display:"flex",
                        justifyContent:"space-between",
                        marginTop:"2rem",
                        padding:0,
                        // backgroundColor:"red",
                        height:"20%",
                    }}>
                        <Button variant="contained" style={{width:"40%"}}>Share</Button>
                        <Button variant="outlined" style={{width:"40%"}}>cancel</Button>
                    </div>
                </box>
            </Container>
            
        </>
    )
};
export default WorkerDetail;