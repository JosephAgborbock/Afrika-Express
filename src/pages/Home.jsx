import React, { Component } from 'react';
import { Col, Grid, Row,  div,  } from 'react-bootstrap'

import './Home.css';   
class Home extends Component {
  render() {
    return (
        
        <section className="service-cards">
            <div>
                <h1 className="services">Our Services</h1>
                <p>
                Choose just the services you need, or build an all-inclusive package
                </p>
            </div>
            <div className="cards-section">
                {/*First cards section*/}
                <Grid className="gridcards">
                    <Row>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>24/7 Phone<br/>Support</h3>
                                <p className="text">
                                If you have the DNY type but want occasional help getting start our phone support service is for you.
                                </p>
                                <div>
                                <p className="learn-more"><a href="http://afrika-express.herokuapp.com/">Learn More</a></p>
                                
                                <img src={require("../images/24-7-support.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Consulting<br/>Sessions</h3>
                                <p className="text">
                                Whether for an hour or a day, we'll sit down with you and your team to build a complete strategy for success.
                                </p>
                                <div>
                                <p className="learn-more"><a href="http://afrika-express.herokuapp.com/">Learn More</a></p>
                                <img src={require("../images/consulting.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Weekly Check-<br/>ins</h3>
                                <p className="text">
                                Stay on track with regular check-in session ideal,for busy access who just need more hours in the day.
                                </p>
                                <div>
                                <p className="learn-more">Learn More</p>
                                <img src={require("../images/weekly.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Onsite<br/>Seminars</h3>
                                <p className="text">
                                Does your whole team need training? Let us come to your office and lead a semainer designed just fro you.
                                </p>
                                <div>
                                <p className="learn-more">
                                Learn More
                                </p>
                                <img src={require("../images/seminar.jpg")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Writing<br/>Services</h3>
                                <p className="text">
                                When you need to make a case for your business. we'll help you tell your story powerfully and persuessively.
                                </p>
                                <div>
                                <p className="learn-more">
                                Learn More
                                </p>
                                <img src={require("../images/writing.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Security<br/>Auditing</h3>
                                <p className="text">
                                Don't leave the security of your data up to chance. Let us identify any weak spots so your company stay safe.    
                                </p>
                                <div>
                                <p className="learn-more">
                                Learn More
                                </p>
                                <img src={require("../images/security.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Industry<br/>Report</h3>
                                <p className="text">
                                Subscribe to our quarterly reports to get key insights into the future of your industry before competitors.
                                </p>
                                <div>
                                <p className="learn-more">
                                Learn More
                                </p>
                                <img src={require("../images/industry.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="card-title">
                                <h3>Budget<br/>Planning</h3>
                                <p className="text">
                                Our comprehensive budget planning services help you alocate your funds more clearly and effectively.
                                </p>
                                <div>
                                <p className="learn-more">
                                Learn More
                                </p>
                                <img src={require("../images/budget.png")} className="image" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </section>
     
    );
  }
}

export default Home;