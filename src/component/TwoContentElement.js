import React from 'react';
import {Container, Row, Col, Center} from 'react-bootstrap';

const TwoContentElement = (props) => {
    return (
        <>
        <section style={{backgroundColor: "orange", marginTop: 200, height: 350}}>
        <Container  >
            <Row>
                <div className='col-sm-12'>
                <h1 className="text-header mt-3 text-center" style={{fontSize: 80, color: 'black', opacity: 0.7}}><b>Smart</b></h1>
                </div>
            </Row>
            <Row className='mt-5 text-center'>
                <div className='col-6 col-md-6 col-lg-3'>
                    <img src='../../images/data.svg' className='text-center' width='40%' style={{color:'rgb(51,51,51)',fill:'rgb(51,51,51)',opacity: 0.7 }}/>
                </div>
                <div className='col-6 col-md-6 col-lg-3'>
                    <img src='../../images/badge.svg' className='text-center' width='40%' style={{color:'rgb(51,51,51)',fill:'rgb(51,51,51)',opacity: 0.7 }}/>
                </div>
                <div className='col-6 col-md-6 col-lg-3'>
                    <img src='../../images/users-social.svg' className='text-center' width='40%' style={{color:'rgb(51,51,51)',fill:'rgb(51,51,51)',opacity: 0.7 }}/>
                </div>
                <div className='col-6 col-md-6 col-lg-3'>
                    <img src='../../images/dice.svg' className='text-center' width='40%' style={{color:'rgb(51,51,51)',fill:'rgb(51,51,51)',opacity: 0.7 }}/>
                </div>
            </Row>
        </Container>
        </section>
        </>
    );
}

export default TwoContentElement;