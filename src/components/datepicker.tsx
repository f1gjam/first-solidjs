import { createSignal } from 'solid-js';
import DatePicker, { PickerValue, utils } from '@rnwonder/solid-date-picker';


const today = new Date();
const formattedDate = utils().formatDate(today, { format: "MMM-yyyy" });

var selectedDate: string //= formattedDate


export const [date, setDate] = createSignal
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

export function DatePickerComponent() {


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
                    console.log("formatted date: " + formattedSelectedDate);
                    selectedDate = formattedSelectedDate;
                    setDate(
                        {
                            value: {
                                selected: formattedSelectedDate,
                            },
                            label: formattedSelectedDate,
                        })
                    console.log(date().value.selected);

                }


            }

            }

        />

    )
    console.log(date);

}


