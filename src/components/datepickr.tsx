
import DatePicker from "react-datepicker";
import { signal } from '@preact/signals-react'

import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './datepickr.css'


import { format } from "date-fns";
import { fetchData } from "./katable";


let current_date: Date = new Date();

const dateFormattedString: string = format(current_date, "MMMM-yyyy").toString()
export const formattedDate = signal<string>(dateFormattedString);


export function DatePickr() {


    const [startDate, setStartDate] = useState(current_date);

    return (
        <>

            <DatePicker
                calendarClassName=".react-datepicker-popper"
                selected={startDate}
                dateFormat="MMMM-yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showFourColumnMonthYearPicker
                minDate={new Date('01-01-2020')}
                maxDate={current_date}
                popperPlacement="top-end"
                // customInput={<ExampleCustomInput />}
                onChange={(date) => {

                    const FormattedDateString: string = format(date || new Date(), "MMMM-yyyy").toString();

                    formattedDate.value = FormattedDateString;
                    console.log(FormattedDateString);

                    fetchData(formattedDate.value);
                    setStartDate(date || new Date())

                }}

            // onSelect={(date) => {
            //     //date && setStartDate(date)
            //     const FormattedDateString: string = format(date, "MMMM-yyyy").toString()

            //     formattedDate.value = FormattedDateString;
            //     console.log(FormattedDateString);

            //     fetchData(formattedDate.value);
            // }}
            />
        </>
    );

};
