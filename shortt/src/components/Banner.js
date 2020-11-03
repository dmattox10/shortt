import { CardTitle, CardText, Row, Col, CardLink, Jumbotron } from 'reactstrap'
const Banner = props => {
    return (
        <Row>
            <Col xs='12'>
                <Jumbotron>
                    <CardTitle><h2>Daniel Mattox's Cool URL Shortener</h2></CardTitle>
                    <CardText>Shrink long URL's like Amazon product links, using this tool. No information about the user is stored anywhere. No Tracking. No Ads. No BS.</CardText>
                    <CardText>Check out my skills and this and other projects code and features here:&nbsp;<CardLink target='_blank' href='https://github.com/dmattox10'>My GitHub Profile</CardLink></CardText>
                    <CardText>Get my Resume and hire me here:&nbsp;<CardLink target='_blank' href='https://danielmattox.com/Resume.PDF'>Resume.PDF</CardLink></CardText>
                    <CardText>Check out all of my social links here:&nbsp;<CardLink target='_blank' href='https://linkedin.com/in/dmattox10'>LinkedIn</CardLink><CardLink target='_blank' href='https://twitter.com/dmattox10'>Twitter</CardLink></CardText>
                    <CardText>Enter a link to shorten, then suggest the text you'd like it shorten to. If it's not taken you'll get the link back, if it is taken the system will suggest a short random blurb, or you can try another blurb of your own. If you don't mind, leave the link public please so that it's part of the top links section if it's popular!</CardText>
                </Jumbotron>
            </Col>
        </Row>
    )
}

export default Banner