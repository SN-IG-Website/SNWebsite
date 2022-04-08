import React from 'react';
import "./Table.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';

function Table() {
    return (
        <>
            <div className='full-table'>
                <div className='heading-ex'>
                    <h2>EX HALL COUNCIL</h2>
                    <h4>2021-2022</h4>
                </div>
                <Row className='table-row'>
                <Col><a href='#'>Name</a></Col>
                    <Col>Batch</Col>
                    <Col>Awards</Col>
                </Row>

                <Row className='table-row'>
                    <Col><a href='#'>Name</a></Col>
                    <Col>Batch</Col>
                    <Col>Awards</Col>
                </Row>

                <Row className='table-row'>
                <Col><a href='#'>Name</a></Col>
                    <Col>Batch</Col>
                    <Col>Awards</Col>
                </Row>

                <Row className='table-row'>
                <Col><a href='#'>Name</a></Col>
                    <Col>Batch</Col>
                    <Col>Awards</Col>
                </Row>

            </div>
        </>
    );
}

export default Table;