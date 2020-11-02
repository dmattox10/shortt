import { Card, CardTitle, CardText, Row, Col, CardLink } from 'reactstrap'
const Stats = props => {
    return (
        <Row>
            <Col xs='12'>
                <Card body style={{border: 'none'}}>
                    <CardTitle><h3>Usage Stats:</h3></CardTitle>
                    <CardText>Total URL's shrunk:</CardText>
                    <CardText>Total Clicks on all URL's:</CardText>
                    <CardText>Total Visits to this tool:</CardText>
                </Card>
            </Col>
        </Row>
    )
}

export default Stats