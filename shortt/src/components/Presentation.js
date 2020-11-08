import { Container, Row} from 'reactstrap'
import Popular from './Popular'
const Presentation = props => {
    const { top } = props
    return (
        <Container>
            <Row>
                {top.map(shortt => (
                    <Popular shortt={shortt} />
                ))}
            </Row>
        </Container>
    )
}

export default Presentation