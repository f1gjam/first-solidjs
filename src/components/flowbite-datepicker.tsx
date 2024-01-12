import Datepicker from "tailwind-datepicker-react"
import { signal } from '@preact/signals-react'
import React, { useState } from "react";
import { format } from "date-fns";

import { fetchData } from "./katable";


const current_date: Date = new Date();

const dateFormattedString: string = format(current_date, "MMMM-yyyy").toString()

export const formattedDate = signal<string>(dateFormattedString);


export function DemoComponent() {
    const [show, setShow] = useState(false);
    const handleChange = (selectedDate: Date) => {
    }
    const handleClose = (state: boolean) => {

        setShow(state)
    }


    return (
        <div>
            <Datepicker


                options={{
                    //title: "Demo Title",
                    autoHide: true,
                    todayBtn: false,
                    clearBtn: false,
                    clearBtnText: "Clear",
                    maxDate: new Date(),
                    minDate: new Date("2020-01-01"),

                    // theme: {
                    //     background: "bg-gray-700 dark:bg-gray-800",
                    //     todayBtn: "",
                    //     clearBtn: "",
                    //     icons: "",
                    //     text: "",
                    //     disabledText: "bg-red-500",
                    //     input: "",
                    //     inputIcon: "",
                    //     selected: "",
                    // },
                    // icons: {
                    //     // () => ReactElement | JSX.Element
                    //     prev: () => <span>Previous</span>,
                    //     next: () => <span>Next</span>,
                    // },
                    datepickerClassNames: "top-12",
                    defaultDate: new Date(),
                    language: "en",
                    disabledDates: [],
                    //weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    inputNameProp: "date",
                    inputIdProp: "date",
                    inputPlaceholderProp: "Select Date",
                    inputDateFormatProp: {
                        //day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                }}

                onChange={(selectedDate: Date) => {
                    handleChange(selectedDate);
                    console.log("Date Selected: " + selectedDate)
                    const FormattedDateString: string = format(selectedDate, "MMMM-yyyy").toString()


                    formattedDate.value = FormattedDateString;

                    fetchData(formattedDate.value);

                }}
                show={show} setShow={handleClose} />
        </div>
    )
}