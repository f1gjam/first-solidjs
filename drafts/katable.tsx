import 'flowbite';
import type { StravaStatsDataType } from '../models/myTypes'

import 'ka-table/style.css';


import { ActionType, ITableInstance, Table, useTable } from 'ka-table';
import { DataType, EditingMode, SortingMode, PagingPosition } from 'ka-table/enums';

import { effect, signal } from '@preact/signals-react'
import React, { useState } from 'react';


//import { myTestData } from "../models/data";
import { useEffect } from 'react';
import { format } from "date-fns";


import { set } from 'date-fns';



async function fetchData(selectedDate: string, setAthletes: any) {
    if (selectedDate == "") {
        console.log("selectedDate is empty - setting to current month");
        selectedDate = format(new Date(), "MMMM-yyyy").toString()
    }
    let params = new URLSearchParams({ monthSelected: selectedDate });

    let apiUrl = `http://localhost:8080/dataapi/rider_totals?${params}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data: StravaStatsDataType = await response.json();
    setAthletes(data);
}


export function KATable({ date }: { date: string }) {

    console.log(date);

    const [athletes, setAthletes] = useState<StravaStatsDataType>();


    const table = useTable();


    useEffect(() => {
        console.log("useEffect: " + date);
        fetchData(date, setAthletes);
        console.log(athletes?.MaleSorted);
        table.loadData();
    }, [date]);







    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >


            <Table
                data={athletes?.MaleSorted}
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
