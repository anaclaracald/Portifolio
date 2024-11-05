import { StrictMode } from 'react'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
