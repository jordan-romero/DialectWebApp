
import { theme } from './Theme/theme';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <Box>
            <Typography variant="h1" color="primary">I am for Scott's fancy talking </Typography>
          </Box>
          <Button size="large" variant='outlined'>Push Me</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
