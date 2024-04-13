import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Header from "../../components/Header"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Header/>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          {/* Welcome to Socipedia, the Social Media for Sociopaths! */}
          Daily Door : Where Opportunity Knocks Every Day
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
