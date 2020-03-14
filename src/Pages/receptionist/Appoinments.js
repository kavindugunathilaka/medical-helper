import React from 'react'
import { Container, Table, Row, Col, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';

const Appoinments = (props) => (
    props.appoinments.length < 1 ? <Container fluid>
        <h5>There are no Appoinments Yet</h5>
    </Container> 
        :
        <Container fluid>
            <Row className={'mb-5'}>
                <Col md={6}>
                    <Dropdown>
                        <DropdownToggle variant={'primary'} size={'sm'}>Pages</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                1
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>
                            Doctor Name
                        </th>
                        <th>
                            Patient Name
                        </th>
                        <th>
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.appoinments.map(appoinment => (
                        <tr>
                            <td>
                                {appoinment.doctorName}
                            </td>
                            <td>
                                {appoinment.patientName}
                            </td>
                            <td>
                                {appoinment.time}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
);

const mapStateToProps = (state) => ({
    appoinments: state.appoinmentReducer.appoinments
})


export default connect(mapStateToProps)(Appoinments);