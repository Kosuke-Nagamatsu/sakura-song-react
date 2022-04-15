import styled from 'styled-components';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import audio from '../audio/sakura.mp3';
import image from '../images/sakura.jpg';

export const AudioPlayer = () => {
  return (
    <Card sx={{ display: 'flex', marginTop: '1rem' }}>
      <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            SAKURA
          </Typography>
        </CardContent>
        {/* MDN Web Docs <audio>のひな形を参照 */}
        <SFigure>
          <figcaption>Please listen to the song:</figcaption>
          <audio
            controls
            src={audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </SFigure>
      </Box>
      <Box>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%" }}
          image={image}
          alt="Sakura's picture"
        />
      </Box>
    </Card>
  );
}

const SFigure = styled.figure`
  margin: 0.2rem;
`;