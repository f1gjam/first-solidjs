import 'flowbite';
import type { StravaStatsDataType } from '../models/myTypes'

import 'ka-table/style.css';


import { ActionType, ITableInstance, Table, useTable } from 'ka-table';
import { DataType, EditingMode, SortingMode, PagingPosition } from 'ka-table/enums';

import { signal } from '@preact/signals-react'
import React, { useState } from 'react';


//import { myTestData } from "../models/data";
import { useEffect } from 'react';



//import { formattedDate } from './datepickr'

import { formattedDate } from './flowbite-datepicker'


const emptyData: StravaStatsDataType = ({} as StravaStatsDataType);
const fetchedData = signal<StravaStatsDataType>(emptyData);


export function getData(selectedDate: string) {
    fetchData(selectedDate).then((data) => {
        fetchedData.value = data

    });

}


//let formattedDate: string = "December-2023";

async function fetchData(selectedDate: string): Promise<StravaStatsDataType> {
    let params = new URLSearchParams({ monthSelected: selectedDate });

    let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data: StravaStatsDataType = await response.json();
    return data
}


const updateData = async (table: ITableInstance, selectedDate: string) => {
    table.showLoading("Loading...");
    const response = await fetchData(selectedDate);
    table.hideLoading();
}


export function KATable() {
    //const [data, setData] = useState<StravaStatsDataType>();

    // const table = useTable({

    //     onDispatch: async (action) => {
    //         if (action.type === ActionType.ComponentDidMount) {
    //             table.showLoading("Loading...");
    //             const response = await fetchData();
    //             //const jsonData = await response.json();
    //             setData(response);
    //             table.hideLoading();
    //             table.updateData(response.MaleSorted);
    //             //console.log(response.MaleSorted)

    //         }
    //     }
    // });

    let selectedDate: string = formattedDate.value.toString();
    const table = useTable();


    useEffect(() => {
        updateData(table, selectedDate);
    }, [selectedDate]);

    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >


            <Table
                // loading={{
                //     enabled: true,
                //     text: "Loading..."
                // }}
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

                //data={[]}
                //data={data?.MaleSorted}

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

        </div >


    )
}
