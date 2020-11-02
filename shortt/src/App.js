import { Route } from 'react-router-dom'
import { Row, Col, Container } from 'reactstrap'
import Message from './components/Message'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Presentation from './components/Presentation'
import Success from './components/Success'

function App() {
  return (
    <div className="App">
      <Message />
      <Row>
        <Container>
          <Banner />
        </Container>
      </Row>
      <Container>
        <Row>
          <Col xs='3'>
            <Stats />
          </Col>
          <Col xs='9'>
            <Route exact path='/' component={ Hero } />
            <Route exact path='/success' component={ Success } />
          </Col>
        </Row>
      </Container>
      <Row>
        <Container>
          <Presentation />
        </Container>
      </Row>
    </div>
  );
}

export default App;
