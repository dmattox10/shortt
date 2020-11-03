import { Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import Counter from './Counter'
const Stats = props => {
    return (
        <Row className='centered'>
            <Col xs='12'>
                <Card body>
                    <CardTitle><h3>Usage Stats:</h3></CardTitle>
                    <CardText>Total URL's shrunk:</CardText><br />
                    <Counter number={props.stats.total} />
                    <CardText>Total Clicks on all URL's:</CardText>
                    <Counter number={props.stats.clicks} />
                    <CardText>Total Visits to this tool:</CardText>
                    <Counter number={props.stats.visits} />
                </Card>
            </Col>
        </Row>
    )
}

export default Stats