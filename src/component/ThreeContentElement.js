import React from 'react';
import {Container, Row, Col, Center} from 'react-bootstrap';

const ThreeContentElement = () => {
    return (
        <>
        <section style={{backgroundColor: "#232323", height: 360}}>
        <Container  >
            <Row>
            
            </Row>
            <Row className='mt-5 text-center'>
                <div className='col-12 col-md-12 col-lg-12'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Universitas_Negeri_Jakarta_logo.png' className='text-center' width='20%' style={{color:'rgb(51,51,51)',fill:'rgb(51,51,51)',opacity: 0.7 }}/>
                </div>
            </Row>
            <Row>
            <div className='col-sm-12'>
                
            <h1 className="text-header  text-center" style={{fontSize: 80, color: 'orange', opacity: 0.7}}><b>UNJ</b></h1>
                </div>
            </Row>
        </Container>
        </section>
        </>
    );
}
export default ThreeContentElement;