import { Button, Container, Typography, backdropClasses } from "@mui/material";
import Header from "../../components/Header"



const JobRequestPage = () => {
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
                }}>Edit Job</Button>

            </Container>

            <Container maxWidth="lg" style={{
                // height:"30rem",
                // backgroundColor:"red", 
                marginTop:"2rem",
                // alignItems:"center",
                justifyContent:"center",
                // textAlign:"center",
                objectFit: "cover",
                display:"flex",
                // overflow: "hidden",
                flexDirection:"column",
                // margin:0,
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

                    <Container maxWidth="lg"  sx={{
                        display:"flex",
                        justifyContent:"space-around",
                        marginTop:"1rem"
                    }}>
                    
                    <div style={{width:"30%"}}>
                        <h2>Payment for the job</h2>
                        <h1 style={{fontSize:34}}>Rs. 650/day</h1>
                    </div>

                    <div style={{width:"70%"}}>
                        <h2>Descripton</h2>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut rem beatae laborum assumenda laudantium nihil culpa. Autem cum vitae eligendi, beatae distinctio consequuntur veniam sed earum? Minima quos modi ut!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus esse ex et iste sequi ducimus, recusandae corrupti aliquam temporibus adipisci iure quia rerum accusantium earum dolore, deserunt ad, veniam autem?
                        </p>
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
                        <Button variant="contained" style={{width:"40%"}}>Accept</Button>
                        <Button variant="outlined" style={{width:"40%"}}>Find Next</Button>
                    </div>
                </box>
            </Container>
            
        </>
    )
};
export default JobRequestPage;