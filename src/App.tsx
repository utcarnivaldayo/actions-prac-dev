import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import * as MUIColor from "@mui/material/colors";


// import AppHeader from "./components/AppHeader";

import HomeView from "./pages/home";
import LearnView from "./pages/learn";
import DesignView from "./pages/design";
import DatabaseView from "./pages/database";
import ProfileView from "./pages/profile";
import Paths from "./paths";


const theme = createTheme({
  palette: {
    primary: MUIColor.blue,
    secondary: MUIColor.lightBlue,
    background: {
      default: '#bdc3c7',
      paper: '#cacfd2',
    },
  },
});

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path={Paths.home()} element={<HomeView />} />
          <Route path={Paths.learn()} element={<LearnView />} />
          <Route path={Paths.design()} element={<DesignView />} />
          <Route path={Paths.database()} element={<DatabaseView />} />
          <Route path={Paths.profile()} element={<ProfileView />} />
        </Routes>
      </ThemeProvider >
    </>
  );
}

export default App
