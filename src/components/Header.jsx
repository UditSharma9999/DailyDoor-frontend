import { useState } from "react";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import {
  Box, 
  Typography, 
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";




const Header = () => {

  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return(
        <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="left"
        style={{
          display:"flex",
        }}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          DailyDoor
        </Typography> 

        <div style={{
          width:"100%",
          // backgroundColor:"red",
          alignItems:"right",
          justifyContent:"right",
          textAlign:"right"
        }}>
          

         { isLogin && (
          <>
            <p>welcome, Name</p>
            {/* <img src={src} alt="Logo"/>;  */}
            {/* menu */}
          </>
         )}
        </div>
      </Box>
    )
};
export default Header;

