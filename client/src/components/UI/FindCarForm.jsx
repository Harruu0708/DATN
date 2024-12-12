import React from 'react';
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import {Form, FormGroup} from 'reactstrap';
const FindCarForm = () => {
    return (<Form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
            <FormGroup className="form__group">
                <input type="text" placeholder="Address" required></input>
            </FormGroup>

            <FormGroup className="form__group">
                <input type="text" placeholder="Price" required></input>
            </FormGroup>

            <FormGroup className="select__group">
                <select>
                    <option value="car"> Car</option>
                    <option value="motorbike">Motorbike</option>
                    <option value="bike">Bike</option>
                </select>
            </FormGroup>

            <FormGroup className="form__group">
                <button className="btn find__car-btn">Find Car</button>
            </FormGroup>

        </div>
    </Form>
    )
}; 

export default FindCarForm;