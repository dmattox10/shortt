import { Card, CardTitle, Row, Col, Button } from 'reactstrap'
import { useContext, useState } from 'react'
import { shorttContext } from '../contexts/shorttContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const Success = props => {

    const { tryUrl, message, resetAll } = useContext(shorttContext)
    const [copied, setCopied] = useState(false)
    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>Your URL is ready!</h3></CardTitle>
                    <div className='centered'>
                        <h3>{tryUrl.text}
                            <CopyToClipboard text={tryUrl.text}
                            onCopy={() => setCopied(true)}>
                                <Button color={copied ? 'success' : 'primary'}>Copy to clipboard!</Button>
                            </CopyToClipboard>
                        </h3>
                        <h4>{message.text}</h4>
                        <Button onClick={resetAll}>Reset!</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Success