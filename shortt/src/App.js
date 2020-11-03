import { Route } from 'react-router-dom'
import { Row, Col, Container } from 'reactstrap'

import { shorttContext } from './contexts/shorttContext'
import { useShortt } from './hooks/useShortt'
import Message from './components/Message'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Presentation from './components/Presentation'
import Success from './components/Success'

function App() {

  const [stats, addUrl, message, blurb] = useShortt()
  return (
    <div className="App">
      <shorttContext.Provider value={{stats, addUrl, message, blurb}}>
        <Message />
        <Row>
          <Container>
            <Banner />
          </Container>
        </Row>
        <Container>
          <Row>
            <Col xs='3'>
              <Stats stats={stats}/>
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
      </shorttContext.Provider>
    </div>
  );
}

export default App;
