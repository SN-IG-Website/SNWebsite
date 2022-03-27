
import React from 'react';
import "../components/AlumniTable.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTable } from "react-table";

function AlumniTable() {
    return (
        <>
            <div style={{ display: 'block', padding: 50 }}>
                <h4
                style={{
                    padding: "30px",
                    margin: "20px",
                    textAlign: "center",
                    fontSize: "50px"
                }}>Distinguished Alumni</h4>
                <Row>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Name
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Batch
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Achievement
                    </Col>
                </Row>
                <Row>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        <a href='#'>Lorem ipsum</a>
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Lorem ipsum
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Lorem ipsum 
                    </Col>
                </Row>
                <Row>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        <a href='#'>Lorem ipsum</a>
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Lorem ipsum
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        borderStyle: "solid",
                        width: "30%",
                        padding: "15px"
                    }}>
                        Lorem ipsum 
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default AlumniTable;