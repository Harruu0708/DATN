import React from "react";

import '../../styles/booking-form.css';

import {Form, FormGroup} from 'reactstrap';
const BookingForm = () => {
    const submitHandler = event => {
        event.preventDefault();
    }
  return (
    <Form onSubmit = {submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <select name="Select number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input type="date" placeholder="From Date" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input type="date" placeholder="To Date" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input type="time" placeholder="Getting Time" className="time__picker" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <textarea rows={5} type='textarea' className="textarea" placeholder="Write"></textarea>
        </FormGroup>
    </Form>
  );
}

export default BookingForm;