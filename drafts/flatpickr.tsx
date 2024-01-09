import Flatpickr from "react-flatpickr";
import moment from 'moment'
import { getData } from "./katable";

import { signal } from '@preact/signals-react'

import React, { Component } from 'react';


let date: Date = new Date();
const dateFormattedString: string = moment(date).format("MMMM-yyyy").toString()

export const formattedDate = signal<string>(dateFormattedString);



const options = {
    maxDate: date,
    mode: 'range',

    dateFormat: "F-Y",
    minDate: new Date('01-01-2020'),

    // THIS `wrap` option is required when using external elements!
    // https://flatpickr.js.org/examples/#flatpickr-external-elements
    wrap: true
};

export function DatePicker() {
    return (
        <div>
            <Flatpickr
                options={
                    maxDate: date,
            mode: 'range',

            dateFormat: "F-Y",
            minDate: new Date('01-01-2020'),

            // THIS `wrap` option is required when using external elements!
            // https://flatpickr.js.org/examples/#flatpickr-external-elements
            wrap: true
                }

                //value={date}
            onChange={([date]) => {
                const formattedDate: string = moment(date).format("MMMM-yyyy").toString();
                getData();
                console.log(formattedDate);
                return formattedDate
            }}

            >
            {/*<input type="text" placeholder="Select Date.." data-input/>*/}
        </Flatpickr>
        </div >
    );

}

