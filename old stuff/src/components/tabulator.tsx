import 'flowbite';
import { Show, createResource } from 'solid-js';
import type { StravaStatsDataType } from '../models/myTypes'




import { date } from './datepicker';

import { Tabulator } from 'tabulator-tables';


// const fetchRiderData = async () => {
//     const url = 'http://localhost:8080/dataapi/rider_totals'
//     const res = await fetch(url)
//     const data = await res.json()
//     const statsData = data as StravaStatsDataType
//     return statsData
// }


async function fetchData(): Promise<any> {
    var selectedDate = await date().value.selected;
    let params = new URLSearchParams({ monthSelected: selectedDate! });

    let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
    console.log(apiUrl);
    //var data = (await fetch(apiUrl)).json()
    var response = await fetch(apiUrl);
    var data: StravaStatsDataType = await response.json();
    var dataArray: any[] = []
    // for (let i = 0; i < data.MaleSorted.length; i++) {
    //     dataArray.push(data.MaleSorted[i].AthleteName,
    //         data.MaleSorted[i].TotalDistance,
    //         data.MaleSorted[i].TotalOutdoorDistance,
    //         data.MaleSorted[i].TotalIndoorDistance,
    //         data.MaleSorted[i].PercentIndoor,
    //         data.MaleSorted[i].TotalOutdoorElevation,
    //         data.MaleSorted[i].TotalIndoorElevation,
    //         data.MaleSorted[i].TotalElevation);
    //     ;
    // }

    for (let i = 0; i < data.MaleSorted.length; i++) {
        dataArray.push(data.MaleSorted[i]);

    }

    // { key: 'column1', title: 'Athlete Name', dataType: DataType.String, isSortable: true, field: "AthletesName" },
    // { key: 'column2', title: 'Total Distance', dataType: DataType.Number, isSortable: true, field: "TotalDistance" },
    // { key: 'column3', title: 'Total Outdoor Distance', dataType: DataType.Number, isSortable: true, field: "TotalOutdoorDistance" },
    // { key: 'column4', title: 'Total Indoor Distance', dataType: DataType.Number, isSortable: true, field: "TotalIndoorDistance" },
    // { key: 'column5', title: 'Percentage Indoor', dataType: DataType.Number, isSortable: true, field: "PercentageIndoor" },
    // { key: 'column6', title: 'Total Outdoor Elevation', dataType: DataType.Number, isSortable: true, field: "TotalOutdoorElevation" },
    // { key: 'column7', title: 'Total Indoor Elevation', dataType: DataType.Number, isSortable: true, field: "TotalIndoorElevation" },
    // { key: 'column8', title: 'Total Elevation', dataType: DataType.Number, isSortable: true, field: "TotalElevation" },


    // for (let i = 0; i < data.MaleSorted.length; i++) {
    //     dataArray.push({
    //         "AthletesName": data.MaleSorted[i].AthleteName,
    //         "TotalDistance": data.MaleSorted[i].TotalDistance,
    //         "TotalOutdoorDistance": data.MaleSorted[i].TotalOutdoorDistance,
    //         "TotalIndoorDistance": data.MaleSorted[i].TotalIndoorDistance,
    //         "PercentageIndoor": data.MaleSorted[i].PercentIndoor,
    //         "TotalOutdoorElevation": data.MaleSorted[i].TotalOutdoorElevation,
    //         "TotalIndoorElevation": data.MaleSorted[i].TotalIndoorElevation,
    //         "TotalElevation": data.MaleSorted[i].TotalElevation
    //     });
    //     ;
    // }



    return dataArray

    //return data

}


export function TabulatorTable() {
    const [riderData] = createResource(date, fetchData)




    // const tablePropsInit: ITableProps = {
    //     columns={
    //         [
    //             { key: 'column1', title: 'Athlete Name', dataType: DataType.String },
    //             { key: 'column2', title: 'Total Distance', dataType: DataType.Number },
    //             { key: 'column3', title: 'Total Outdoor Distance', dataType: DataType.Number },
    //             { key: 'column4', title: 'Total Indoor Distance', dataType: DataType.Number },
    //             { key: 'column5', title: 'Percentage Indoor', dataType: DataType.Number },
    //             { key: 'column6', title: 'Total Outdoor Elevation', dataType: DataType.Number },
    //             { key: 'column7', title: 'Total Indoor Elevation', dataType: DataType.Number },
    //             { key: 'column8', title: 'Total Elevation', dataType: DataType.Number },

    //     ]}

    //         data: dataArray,
    //     editingMode: EditingMode.Cell,
    //     rowKeyField: 'id',
    //     sortingMode: SortingMode.Single,
    // };



    const table = new Tabulator("#example-table", {
        data: riderData(),
        autoColumns: true,
        autoColumnsDefinitions: [
            { field: "AthletesName", title: 'Athlete Name', headerFilter: true },
            { field: "TotalDistance", title: 'Total Distance' },
            { field: "TotalOutdoorDistance", title: 'Total Oudoor Distance' },
            { field: "TotalIndoorDistance", title: 'Total Indoor Distance' },
            { field: "PercentageIndoor", title: 'Percentage Indoor' },
            { field: "TotalOutdoorElevation", title: 'Total Outdoor Elevation' },
            { field: "TotalIndoorElevation", title: 'Total Indoor Elevation' },
            { field: "TotalElevation", title: 'Total Elevation' },
        ],

    });



    return (

        <>
            <div id="example-table" class="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >
                <Show when={riderData()} fallback={<div><h2>Loading...</h2></div>}>

                    <Tabulator

                    />

                </Show>

            </div >
        </>
    )
}


// { key: 'column1', title: 'Athlete Name', dataType: DataType.String, isSortable: true, field: "AthletesName" },
// { key: 'column2', title: 'Total Distance', dataType: DataType.Number, isSortable: true, field: "TotalDistance" },
// { key: 'column3', title: 'Total Outdoor Distance', dataType: DataType.Number, isSortable: true, field: "TotalOutdoorDistance" },
// { key: 'column4', title: 'Total Indoor Distance', dataType: DataType.Number, isSortable: true, field: "TotalIndoorDistance" },
// { key: 'column5', title: 'Percentage Indoor', dataType: DataType.Number, isSortable: true, field: "PercentageIndoor" },
// { key: 'column6', title: 'Total Outdoor Elevation', dataType: DataType.Number, isSortable: true, field: "TotalOutdoorElevation" },
// { key: 'column7', title: 'Total Indoor Elevation', dataType: DataType.Number, isSortable: true, field: "TotalIndoorElevation" },
// { key: 'column8', title: 'Total Elevation', dataType: DataType.Number, isSortable: true, field: "TotalElevation" },