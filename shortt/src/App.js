import { Row, Col, Container } from 'reactstrap'
import { Route } from 'react-router-dom'
import { shorttContext } from './contexts/shorttContext'
import { useShortt } from './hooks/useShortt'
import Message from './components/Message'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Success from './components/Success'

const App = props => {

  const [stats, addUrl, message, blurb, baseUrl, tryUrl, origUrl, resetAll] = useShortt()
  console.log(tryUrl.text)
  return (
    <div className="App">
      <shorttContext.Provider value={{stats, addUrl, message, blurb, baseUrl, tryUrl, origUrl, resetAll}}>
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
      </shorttContext.Provider>
    </div>
  );
}

export default App;
