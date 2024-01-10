import Datepicker from "tailwind-datepicker-react"
import { signal } from '@preact/signals-react'
import React, { useState } from "react";
import { format } from "date-fns";



//import { getData } from "./katable";

//import { fetchData } from "./katable2";
import { fetchedData } from "./katable2";

const current_date: Date = new Date();

const dateFormattedString: string = format(current_date, "MMMM-yyyy").toString()

export const formattedDate = signal<string>(dateFormattedString);



export function DemoComponent2() {
    const [show, setShow] = useState(false);
    const handleChange = (selectedDate: Date) => {
    }
    const handleClose = (state: boolean) => {
        //getData();

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
                    //fetchData(FormattedDateString);


                    async function fetchData(selectedDate: string) {
                        let params = new URLSearchParams({ monthSelected: selectedDate });

                        let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
                        console.log(apiUrl);
                        const response = await fetch(apiUrl);
                        let data = await response.json();
                        //eeturn await response.json();
                        fetchedData.value = data;

                    }
                    // let data = fetchData(FormattedDateString);
                    // data.then((data) => {
                    //     fetchedData.value = data;
                    // })


                }}
                show={show} setShow={handleClose} />
        </div>
    )
}