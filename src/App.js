import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import  DailyWorkerForm  from "./scenes/dailyworkerform";
import ActivePosting from "scenes/activeposting";
import JobRequestPage from "scenes/jobrequestpage";
import WorkerDetail from "scenes/workerdetail";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/DailyWorkerForm"
              // element={isAuth ? <DailyWorkerForm /> : <Navigate to="/" />}
              element={<DailyWorkerForm />}
            />

            <Route
              path="/ActivePosting"
              element={<ActivePosting />}
            />

            <Route
              path="/JobRequestPage"
              element={<JobRequestPage />}
            />

            <Route
              path="/WorkerDetail"
              element={<WorkerDetail />}
            />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

