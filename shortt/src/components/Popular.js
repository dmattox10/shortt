import { Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import Counter from './Counter'
const Popular = props => {
    const { shortt } = props 
    console.log(shortt)
    return (
        <Col xs={4}>
            <Card body className='centered'>
                <CardTitle>{shortt.title}</CardTitle>
                <CardText>Clicks:</CardText>
                <Counter number={shortt.clickCount} />
            </Card>
        </Col>
    )
}

export default Popular