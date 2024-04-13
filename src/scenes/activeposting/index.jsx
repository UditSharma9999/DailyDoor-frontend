import {useState} from "react";
import axios from "axios";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Header from  "../../components/Header";
import ChatIcon from '@mui/icons-material/Chat';
import InfiniteScroll from 'react-infinite-scroll-component';

// import imag from "../../../public/assets/mapss.jpeg"

const ActivePosting = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (__page) => {
    console.log(__page);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    setItems([...items, ...response.data]);
    setPage(page + 1);
    // console.log(page)
  };
  return (
    <>
      <Header/>

      <Container maxWidth="lg" style={{height:"2rem"}}/>
      <Container maxWidth="lg" >
      <Typography fontWeight="bold" fontSize={21} variant="h5" sx={{ mb: "1.5rem" }}>
        Active Postings
      </Typography>
      </Container>

      <Container maxWidth="lg"  sx={{
        display:"flex",
        // justifyContent:"space-around",
        marginTop:"1rem",
        height:"30%",
        // backgroundColor:"red"
      }}>
        <img src="/images/mapss.jpeg" alt="contactus" style={{ width: "70%", }} />
        <Container
          // display="flex"
          // alignItems="center"
          // gap={4}
          // p={2}
          sx={{width:"30%" }}
        >
        Full day home service

        <p>Description</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis labore explicabo fugiat, quas recusandae reiciendis! Nobis sed illum eius assumenda, ut magnam perspiciatis minima voluptatibus, error corporis mollitia fugit!</p>

        <div style={{
          display:"flex",
          justifyContent:"space-around",
          marginTop:"1em"
        }}>
          {/* <Button variant="contained" endIcon={<ChatIcon/>}></Button> */}
          <IconButton aria-label="delete" color="primary" size="small">
            <ChatIcon fontSize="inherit" />
          </IconButton>
         
          <Button variant="contained">Edit Job</Button>
          <Button variant="outlined">Cancel</Button>
        </div>
      </Container>
    </Container>

    <Container maxWidth="lg" style={{marginTop:"2rem"}} >
      <Typography fontWeight="bold" fontSize={21} variant="h5" sx={{ mb: "1.5rem" }}>
        Your Job Postiongs
      </Typography>

      <Button variant="contained" style={{width:"100%"}}>+ Add Job Posting</Button>

      {/* <InfiniteScroll
      style={{ margin: "10px" }}
      pageStart={0}
      loadMore={fetchData}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </InfiniteScroll> */} 
    </Container>



    </>
  );
};

export default ActivePosting;
