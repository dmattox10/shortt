import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react'
import { addUrl } from '../contexts/shorttContext'
const Hero = props => {
    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>This is where the magic happens!</h3></CardTitle>
                    <Card style={{border: 'none'}}>
                        <Form>
                            <FormGroup row>
                                <Label for='longUrl' sm={3} size='lg'>URL to shorten</Label>
                                <Col sm={9}>
                                    <Input type='text' name='longUrl' id='longUrl' placeholder='https://www.amazon.com/gp/product/B07K2QKFL4?pf_rd_r=ZPP7AGCGP43YE7ZCXNZS&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee' bsSize='lg' />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='urlSuffix' sm={3} size='lg'>Label Attempt</Label>
                                <Col sm={9}>
                                    <Input type='text' name='urlSuffix' id='urlSuffix' placeholder='reeses-amazon' bsSize='lg' />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for='private' sm={3} size='lg'>Private Link?</Label>
                                <Col sm={9}>
                                    <CustomInput type='switch' id='private' name='private' label='Don&apos;t show in &quot;top links&quot; below' />
                                </Col>
                            </FormGroup>
                            <Row>
                                <Col sm={3}>
                                    <h4>Preview:</h4>
                                </Col>
                                <Col sm={9}>
                                    <h4>https://this-is-not-yet-implemented</h4>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Card>
            </Col>
        </Row>
    )
}

export default Hero