import { createSignal } from 'solid-js';
import DatePicker, { PickerValue, utils, IDatePickerOnChange } from '@rnwonder/solid-date-picker';

import { setRowDataFunc } from './table-ag';

const today = new Date();
const formattedDate = utils().formatDate(today, { format: "MMM-yyyy" });

var selectedDate: string

//let url: string

const fetchData = async () =>
    (await fetch(`http://localhost:8080/dataapi/rider_totals?` + new URLSearchParams({
        monthSelected: selectedDate,
    })
    )).json();


export function DatePickerComponent() {
    const [date, setDate] = createSignal
        <PickerValue>({
            value: {
                selected: formattedDate,
            },
            label: formattedDate,
        });

    const minimumDate = {
        year: 2020,
        month: 1,
        day: 1,
    };

    const maximumDate = {
        year: 2030,
        month: 12,
        day: 31,
    };

    return (
        <DatePicker
            value={date}
            setValue={setDate}
            minDate={minimumDate}
            maxDate={maximumDate}
            hideCalendar={false}
            shouldCloseOnSelect={true}
            formatInputLabel='MMM-yyyy'
            onChange={(data) => {
                if (data.type === "single") {

                    console.log(data.selectedDate);
                    let d = data.selectedDate?.day ?? 1
                    let m = data.selectedDate?.month ?? 0
                    let y = data.selectedDate?.year ?? 2023

                    const selectedDateValue = { day: d, month: m, year: y };

                    const formattedDate = utils().convertDateObjectToDate(selectedDateValue) // Date
                    let formattedSelectedDate = utils().formatDate(formattedDate, { format: "MMM-yyyy" });
                    console.log(formattedSelectedDate);
                    selectedDate = formattedSelectedDate;
                    // url = `http://localhost:8080/dataapi/rider_totals?` + new URLSearchParams({
                    //     monthSelected: selectedDate,
                    // })
                    // console.log(url);

                    // let x = fetchData();
                    // console.log(x);
                    setRowDataFunc(fetchData);

                }


            }

            }

        />

    )
    console.log(date);

}


