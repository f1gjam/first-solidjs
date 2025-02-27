import 'flowbite';
import { Show, createResource } from 'solid-js';
import type { StravaStatsDataType } from '../models/myTypes'

import 'ka-table/style.css';

import { ActionType, ITableInstance, Table, useTable } from 'ka-table';
import { DataType, EditingMode, SortingMode, PagingPosition } from 'ka-table/enums';
import { date } from './datepicker';

import { myTestData } from "../models/data";


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


export function KATable() {
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

    const table = useTable();


    return (
        <div class="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >
            {/* <Show when={riderData()} fallback={<div><h2>Loading...</h2></div>}> */}

            {/* <table id="leaderboard" class="w-full table-fixed">
                    <thead class="text-sm text-gray-300 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" class="px-6 py-3 sm:table-cell">
                                Athlete Name
                            </th>
                            <th scope="col" class="px-6 py-3  sm:table-cell" >
                                Total Distance
                            </th>
                            <th scope="col" class="px-6 py-3 sm:table-cell" >
                                Total Outdoor Distance
                            </th>
                            <th scope="col" class="px-6 py-3 sm:table-cell" >
                                Total Indoor Distance
                            </th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell" >
                                Percentage Indoor
                            </th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell" >
                                Total Outdoor Elevation
                            </th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell" >
                                Total Indoor Elevation
                            </th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell" >
                                Total Elevation
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <For each={riderData()?.MaleSorted}>
                            {(athlete) => (
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-300 text-sm text-gray-800">
                                    <td id="athlete_name" class="py-4 px-6 border-b border-gray-200 sm:table-cell">{athlete.AthleteName}</td>
                                    <td id="total_distance" class="py-4 px-6 border-b border-gray-200 truncate sm:table-cell">{athlete.TotalDistance}</td>
                                    <td id="total_outdoor_distance" class="py-4 px-6 border-b border-gray-200 sm:table-cell">{athlete.TotalOutdoorDistance}</td>
                                    <td id="total_indoor_distance" class="py-4 px-6 border-b border-gray-200 sm:table-cell">{athlete.TotalIndoorDistance}</td>
                                    <td id="percentage_indoor" class="py-4 px-6 border-b border-gray-200 hidden lg:table-cell">{athlete.PercentIndoor}</td>
                                    <td id="total_outdoor_elevation" class="py-4 px-6 border-b border-gray-200 hidden lg:table-cell">{athlete.TotalOutdoorElevation}</td>
                                    <td id="total_indoor_elevation" class="py-4 px-6 border-b border-gray-200 hidden lg:table-cell">{athlete.TotalIndoorElevation}</td>
                                    <td id="total_elevation" class="py-4 px-6 border-b border-gray-200 hidden lg:table-cell">{athlete.TotalElevation}</td>
                                </tr>

                            )}
                        </For>
                    </tbody>
                </table> */}

            <Table
                table={table}

                columns={
                    [
                        { key: 'AthleteName', title: 'Athlete Name', dataType: DataType.String, isSortable: true },
                        { key: 'TotalDistance', title: 'Total Distance', dataType: DataType.Number, isSortable: true },
                        { key: 'TotalOutdoorDistance', title: 'Total Outdoor Distance', dataType: DataType.Number, isSortable: true },
                        { key: 'TotalIndoorDistance', title: 'Total Indoor Distance', dataType: DataType.Number, isSortable: true },
                        { key: 'PercentIndoor', title: 'Percentage Indoor', dataType: DataType.Number, isSortable: true },
                        { key: 'TotalOutdoorElevation', title: 'Total Outdoor Elevation', dataType: DataType.Number, isSortable: true },
                        { key: 'TotalIndoorElevation', title: 'Total Indoor Elevation', dataType: DataType.Number, isSortable: true },
                        { key: 'TotalElevation', title: 'Total Elevation', dataType: DataType.Number, isSortable: true },

                    ]}
                //                    data={riderData()?.MaleSorted}
                data={myTestData}

                paging={{
                    enabled: true,
                    pageIndex: 0,
                    pageSize: 10,
                    pageSizes: [5, 10, 15],
                    position: PagingPosition.Bottom
                }}
                editingMode={EditingMode.Cell}
                rowKeyField={'AthleteID'}
                sortingMode={SortingMode.Single}
            />


            {/* </Show> */}

        </div >

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