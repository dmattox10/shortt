import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, FormText, CustomInput, Button } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext, useState, useEffect } from 'react'
import { shorttContext } from '../contexts/shorttContext'
const Hero = props => {

    const { addUrl, message, blurb, baseUrl, origUrl } = useContext(shorttContext)
    const [suffix, updateSuffix] = useState('')

    const formik = useFormik({
        initialValues: {
            longUrl: '',
            urlSuffix: '',
            private: false,
        },
        validationSchema: Yup.object({
            longUrl: Yup.string()
            .required('This field is required.'),
            urlSuffix: Yup.string()
            .matches(/^[0-9a-zA-Z_+-]+$/, 'Must only contain letters, numbers, and +_-')
        }),
        onSubmit: values => {
            values.urlSuffix = suffix
            console.log(values)
            addUrl(values)
        },
    })

    useEffect(() => {
        if (blurb.text !== null) {
            updateSuffix(blurb.text)
            formik.values.urlSuffix = blurb.text
        }
        else {
            updateSuffix(formik.values.urlSuffix)
        }
        if (origUrl !== null) {
            formik.values.longUrl = origUrl
        }
    }, [blurb, formik.values.urlSuffix])

    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>This is where the magic happens!</h3></CardTitle>
                    <Card style={{border: 'none'}}>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup row>
                                <Label for='longUrl' sm={3} size='lg'>URL to shorten</Label>
                                <Col sm={9}>
                                    <Input type='text' name='longUrl' id='longUrl' value={formik.values.longUrl} placeholder='https://www.amazon.com/gp/product/B07K2QKFL4?pf_rd_r=ZPP7AGCGP43YE7ZCXNZS&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee' bsSize='lg' className={formik.touched.longUrl && !formik.errors.longUrl ? 'form-control is-valid' : 'form-control is-invalid'} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.longUrl && formik.errors.longUrl ? <div className='invalid-feedback'>{formik.errors.longUrl}</div> : null}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='urlSuffix' sm={3} size='lg'>Label Attempt</Label>
                                <Col sm={9}>
                                    <Input type='text' name='urlSuffix' id='urlSuffix' value={formik.values.urlSuffix} placeholder='reeses-amazon' bsSize='lg' className={!formik.errors.urlSuffix ? 'form-control is-valid' : 'form-control is-invalid'} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.urlSuffix ? <div className='invalid-feedback'>{formik.errors.urlSuffix}</div> : null}
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for='private' sm={3} size='lg'>Private Link?</Label>
                                <Col sm={9}>
                                    <CustomInput type='switch' id='private' name='private' label='Don&apos;t show in &quot;top links&quot; below' bsSize='lg' value={formik.values.private} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </Col>
                            </FormGroup>
                            <Row>
                                <Col sm={12}>
                                    {message.text !== null ? <h5>{message.text}</h5> : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <h4>Preview:</h4>
                                </Col>
                                <Col sm={8}>
                                    <h4>{`${baseUrl}/${suffix}`}</h4>
                                </Col>
                                <Col sm={2}>
                                    <Button type='submit' color='primary'>Do it!</Button>
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