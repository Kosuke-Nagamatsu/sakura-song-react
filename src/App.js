import { Message } from './components/Message';
import { AudioPlayer } from './components/AudioPlayer';
import { TranslationForm } from './components/TranslationForm';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
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
