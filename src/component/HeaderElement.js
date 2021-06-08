import React from 'react';
import {Container, Row, Col, Center} from 'react-bootstrap';
import './cssHeader/header.css';
function HeaderElement(props)
{
    return (
        <>
        <Container className="mt-5">
            <Row>
                <div  className='col-sm-6'>
                <h1 className="text-header mt-5 text-center" style={{fontSize: 100, color: 'orange'}}><b>{props.judul}</b></h1>
                
                <h1 className="text-header  text-center" style={{ color: 'orange', marginTop: -20}}><b>{props.sktn}</b></h1>
               <div style={{marginLeft: '15%'}} className='mt-3'>
                <a href='http://localhost/cbt/index.php/welcome' className='btn ml-5 btn-block' style={{backgroundColor: 'orange', color: 'white', borderRadius: 50, width: 250}}>Masuk</a>
                </div>
                </div>
                <div  className='col-sm-6'>
                <img
                 src={props.img}
                 width='100%'
                />
                </div>
            </Row>
        </Container>
        </>
    );
}
export default HeaderElement;