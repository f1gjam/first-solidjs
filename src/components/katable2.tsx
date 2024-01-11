import 'flowbite';
import type { StravaStatsDataType } from '../models/myTypes'

import 'ka-table/style.css';


import { Table, useTable } from 'ka-table';
import { DataType, EditingMode, SortingMode, PagingPosition } from 'ka-table/enums';

import { effect, signal, useSignal } from '@preact/signals-react'


//import { myTestData } from "../models/data";


const emptyData: StravaStatsDataType = ({} as StravaStatsDataType);
export const fetchedData = signal<StravaStatsDataType>(emptyData);



export function KATable2() {

    const data = fetchedData.value;
    const table = useTable();


    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >


            <Table

                data={fetchedData.value?.MaleSorted}

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
