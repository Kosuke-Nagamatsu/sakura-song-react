import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { AudioPlayer } from './components/AudioPlayer';
import { TranslationForm } from './components/TranslationForm';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <CssBaseline />
      <Message />
      <Container maxWidth="sm">
        <AudioPlayer />
        <TranslationForm />
      </Container>
    </>
  );
}

export default App;
