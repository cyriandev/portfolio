import './App.css';
import { Row, Container, Col } from 'react-bootstrap';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'animate.css';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Hero />
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <Projects />
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  );
}

export default App;
