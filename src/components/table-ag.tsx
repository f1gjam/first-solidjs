import 'flowbite';
import { createResource } from 'solid-js';
import type { StravaStatsDataType } from '../models/myTypes'
import { date } from './datepicker';
import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css'; // grid core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // optional theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // optional theme


async function fetchData(): Promise<StravaStatsDataType> {
    var selectedDate = await date().value.selected;
    let params = new URLSearchParams({ monthSelected: selectedDate! });

    let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
    console.log(apiUrl);
    //var data = (await fetch(apiUrl)).json()
    var response = await fetch(apiUrl);
    var data: StravaStatsDataType = await response.json();
    return data

}



const [rowData] = createResource(date, fetchData);
console.log("rowdata is: " + rowData());

export function TableAG() {

    const columnDefs = [
        {
            headerName: 'Athlete Name', field: 'AthleteName', filter: 'agTextColumnFilter',
            suppressMenu: true,
            floatingFilter: true,
            filterParams: {
                buttons: ['apply', 'reset']
            }
        },
        { headerName: 'Total Distance', field: 'TotalDistance' },
        { headerName: 'Total Outdoor Distance', field: 'TotalOutdoorDistance' },
        { headerName: 'Total Indoor Distance', field: 'TotalIndoorDistance' },
        { headerName: 'Percentage Indoor', field: 'PercentIndoor' },
        { headerName: 'Total Outdoor Elevation', field: 'TotalOutdoorElevation' },
        { headerName: 'Total Indoor Elevation', field: 'TotalIndoorElevation' },
        { headerName: 'Total Elevation', field: 'TotalElevation' },

    ]


    return (
        <div class="my-4 mx-4  place-content-center ag-theme-quartz" style={{ height: '800px' }}>
            <AgGridSolid
                rowData={rowData()?.MaleSorted}
                columnDefs={columnDefs} />
        </div>


    )

}