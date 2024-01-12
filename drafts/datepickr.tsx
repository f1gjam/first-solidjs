
import DatePicker from "react-datepicker";
import { signal } from '@preact/signals-react'

import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";


let current_date: Date = new Date();

const dateFormattedString: string = format(current_date, "MMMM-yyyy").toString()


export const formattedDate = signal<string>(dateFormattedString);


export function DatePickr({ setDate }: { setDate: React.Dispatch<React.SetStateAction<string>> }) {


    const [startDate, setStartDate] = useState(current_date);

    return (
        <DatePicker
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
                date && setStartDate(date)
                const FormattedDateString: string = format(startDate, "MMMM-yyyy").toString()

                formattedDate.value = FormattedDateString;
                setDate(FormattedDateString);
                console.log(FormattedDateString);
            }}
        />
    );

};
