import Footer from '../Components/Footer/Footer';
import HeaderCanvas from '../Components/HeaderCanvas/HeaderCanvas';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import qrcodeImage from './qr-code.png'
import { CenteredOverlay, Container, H1, H2, Overlay, QRCode, SafeArea } from './App.styles';

function App() {
  return (
    <Container>
      <HeaderCanvas />
      <Overlay>

        <CenteredOverlay>
          <H1>Welcome to ACM!</H1>
          <H2>Please scan this QR code for attendance</H2>
          <QRCode src={qrcodeImage} />
          {/* <p>welcome</p> */}
        </CenteredOverlay>
      </Overlay>
      {/* <SafeArea>
        A collection of links that I've found for a variety of programming and design topics.
        <NavigationBar>

        </NavigationBar>

      </SafeArea> */}
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
