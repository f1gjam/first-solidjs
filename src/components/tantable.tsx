import 'flowbite';
import { For, Show, createResource, createSignal } from 'solid-js';
import type { StravaStatsDataType } from '../models/myTypes'




import { date } from './datepicker';

import { createSolidTable, createColumnHelper, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/solid-table'

import { MaleSorted } from '../models/myTypes';
import { myTestData } from "../models/data";


type RowHeaders = {
    AthleteName: string
    TotalDistance: number
    TotalOutdoorDistance: number
    TotalIndoorDistance: number
    PercentIndoor: number
    TotalOutdoorElevation: number
    TotalIndoorElevation: number
    TotalElevation: number
}


let sortedData2: RowHeaders[] = []

export const [data, setData] = createSignal<RowHeaders[]>(sortedData2)


let sortedData: RowHeaders[] = []


export function sortData(dataIN) {
    console.log("sorting the data: " + data)

    for (const item of dataIN) {
        sortedData.push({
            "AthleteName": item.AthleteName,
            "TotalDistance": item.TotalDistance,
            "TotalOutdoorDistance": item.TotalOutdoorDistance,
            "TotalIndoorDistance": item.TotalIndoorDistance,
            "PercentIndoor": item.PercentIndoor,
            "TotalOutdoorElevation": item.TotalOutdoorElevation,
            "TotalIndoorElevation": item.TotalIndoorElevation,
            "TotalElevation": item.TotalElevation
        });
    }
    setData(sortedData);
    console.log("setting the  data: " + data())
    return sortedData
}



export async function fetchData(selectedDate) {
    //var selectedDate = await date().value.selected;
    let params = new URLSearchParams({ monthSelected: selectedDate! });

    let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
    console.log(apiUrl);
    var response = await fetch(apiUrl);
    var data: StravaStatsDataType = await response.json();
    var dataArray: any[] = []


    for (let i = 0; i < data.MaleSorted.length; i++) {
        dataArray.push(data.MaleSorted[i]);

    }
    var finalData = await sortData(dataArray)
    return finalData

    //return data
}



//const columnHelper = createColumnHelper<RowHeaders>()


const defaultColumns: ColumnDef<RowHeaders>[] = [
    {
        accessorKey: 'AthleteName',
        cell: info => info.getValue(),
        header: 'Athletes Name',
        //accessorFn: row => row.AthleteName,

    },
    {
        accessorKey: 'TotalDistance',
        cell: info => info.getValue(),
        header: 'Total Distance',
        //accessorFn: row => row.TotalDistance,

    },
    {
        accessorKey: 'TotalOutdoorDistance',
        cell: info => info.getValue(),
        header: 'Total Outdoor Distance',
        //accessorFn: row => row.TotalOutdoorDistance,

    },
    {
        accessorKey: 'TotalIndoorDistance',
        cell: info => info.getValue(),
        header: 'Total Indoor Distance',
        //accessorFn: row => row.TotalIndoorDistance,

    },
    {
        accessorKey: 'PercentIndoor',
        cell: info => info.getValue(),
        header: 'Percentage Indoor',
        //accessorFn: row => row.PercentIndoor,

    },
    {
        accessorKey: 'TotalOutdoorElevation',
        cell: info => info.getValue(),
        header: 'Total Outdoor Elevation',
        //accessorFn: row => row.TotalOutdoorElevation,

    },
    {
        accessorKey: 'TotalIndoorElevation',
        cell: info => info.getValue(),
        header: 'Total Indoor Elevation',
        //accessorFn: row => row.TotalIndoorElevation,

    },
    {
        accessorKey: 'TotalElevation',
        cell: info => info.getValue(),
        header: 'Total Elevation',
        //accessorFn: row => row.TotalElevation,

    },
]



import { utils } from '@rnwonder/solid-date-picker';

const today = new Date();
const formattedDate = utils().formatDate(today, { format: "MMM-yyyy" });


export const [data2, setData2] = createSignal(formattedDate)



export function TanTable2() {
    //const rerender = () => riderData()
    //const [riderData] = createResource(date, fetchData)
    //let d = sortData(myTestData)

    //var myData = fetchData()



    //    const [myData] = createResource(data, fetchData);


    const [myData] = createResource(data2, fetchData);





    console.log("checking data2: " + data2)

    // var d = sortData(data())

    //d = await sortData(fetchData()   )


    const rerender = () => data()




    console.log("Im in the Tantable funciton")
    console.log("Got the Mydata: " + myData())
    console.log("Got the data2: " + data2())


    console.log("Got the data: " + data)

    const table = createSolidTable({
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        data: data(),
        onStateChange: (state) => {
            console.log("some state: " + myData)
        }
    })



    return (

        <div class="p-2">
            <span>{myData.loading && "Loading..."}</span>
            <table>
                <thead>
                    <For each={table.getHeaderGroups()}>
                        {headerGroup => (
                            <tr>
                                <For each={headerGroup.headers}>
                                    {header => (
                                        <th>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </thead>
                <tbody>
                    <For each={table.getRowModel().rows}>
                        {row => (
                            <tr>
                                <For each={row.getVisibleCells()}>
                                    {cell => (
                                        <td>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </tbody>
                <tfoot>
                    <For each={table.getFooterGroups()}>
                        {footerGroup => (
                            <tr>
                                <For each={footerGroup.headers}>
                                    {header => (
                                        <th>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.footer,
                                                    header.getContext()
                                                )}
                                        </th>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </tfoot>
            </table>
            <div class="h-4" />
            <button onClick={() => rerender()} class="border p-2">
                Rerender
            </button>
        </div>
    )
}


// return (

//     <>
//         <div id="example-table" class="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >
//             <Show when={riderData()} fallback={<div><h2>Loading...</h2></div>}>

//                 <Tabulator

//                 />

//             </Show>

//         </div >
//     </>
// )
// }

