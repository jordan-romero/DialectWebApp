
import { theme } from './Theme/theme';
import { ThemeProvider } from '@mui/material';
import PreLaunchPage from './PreLaunchPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PreLaunchPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
