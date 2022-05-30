import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Main from './Main';
import { Theme } from './theme/CreateTheme';
import "./util/fonts/AvenirNextBold.otf";
import "./util/fonts/AvenirNextLight.otf";
import "./util/fonts/AvenirNextRegular.otf";


function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
    <Main/>
    </div>
    </ThemeProvider>
  );
}

export default App;


