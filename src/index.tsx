import { render } from 'ink';
import { App } from './components/App';
import { ThemeProvider } from './components/ThemeProvider';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  { exitOnCtrlC: true }
);
