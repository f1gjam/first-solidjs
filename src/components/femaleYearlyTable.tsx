import 'flowbite';
import 'ka-table/style.css';

import { Table, useTable } from 'ka-table';
import { DataType, FilteringMode, EditingMode, SortDirection, SortingMode, PagingPosition } from 'ka-table/enums';

import { signal } from '@preact/signals-react'
import { format } from "date-fns";

import type { StravaStatsDataType } from '../models/myTypes'

const emptyData: StravaStatsDataType = ({} as StravaStatsDataType);
export const fetchedData = signal<StravaStatsDataType>(emptyData);

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://www.unixcraft.dev';

export async function fetchData(selectedDate: string) {
    if (selectedDate === "") {
        console.log("selectedDate is empty - setting to current year");
        selectedDate = format(new Date(), "yyyy").toString()
    }
    let params = new URLSearchParams({ yearSelected: selectedDate });

    let apiUrl = `${API_BASE_URL}/dataapi/rider_yearly_totals?${params}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data: StravaStatsDataType = await response.json();
    fetchedData.value = data;
}

fetchData("");

export function FemaleYearlyTable() {
    const table = useTable();

    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >
            <h2 className="text-2xl font-bold p-4">Womens Cycling Yearly Leaderboard</h2>

            <Table
                data={fetchedData.value?.FemaleSorted}
                filteringMode={FilteringMode.FilterRow}
                table={table}
                columns={
                    [
                        {
                            key: 'AthleteName', title: 'Athlete Name', dataType: DataType.String, isSortable: true, style: { width: 240, height: 20, },
                        },
                        {
                            key: 'TotalDistance', title: 'Total Distance', dataType: DataType.Number, isSortable: true,
                            sortDirection: SortDirection.Descend, isFilterable: false
                        },
                        {
                            key: 'TotalOutdoorDistance', title: 'Outdoor Distance', dataType: DataType.Number, isSortable: true, isFilterable: false
                        },
                        { key: 'TotalIndoorDistance', title: 'Indoor Distance', dataType: DataType.Number, isSortable: true, isFilterable: false },
                        { key: 'PercentIndoor', title: 'Percentage Indoor', dataType: DataType.Number, isSortable: true, isFilterable: false },
                        { key: 'TotalOutdoorElevation', title: 'Outdoor Elevation', dataType: DataType.Number, isSortable: true, isFilterable: false },
                        { key: 'TotalIndoorElevation', title: 'Indoor Elevation', dataType: DataType.Number, isSortable: true, isFilterable: false },
                        { key: 'TotalElevation', title: 'Total Elevation', dataType: DataType.Number, isSortable: true, isFilterable: false },
                    ]}
                paging={{
                    enabled: true,
                    pageIndex: 0,
                    pageSize: 10,
                    pageSizes: [5, 10, 15],
                    position: PagingPosition.Bottom
                }}
                editingMode={EditingMode.None}
                rowKeyField={'AthleteID'}
                sortingMode={SortingMode.Single}
                childComponents={{
                    headCell: {
                        elementAttributes: (props) => {
                            if (props.column.key === 'column0') {
                                return {
                                    style: {
                                        ...props.column.style,
                                        position: 'sticky',
                                        left: 0,
                                        zIndex: 10,
                                    }
                                }
                            }
                        }
                    },
                    cell: {
                        elementAttributes: (props) => {
                            if (props.column.key === 'column0') {
                                return {
                                    style: {
                                        ...props.column.style,
                                        position: 'sticky',
                                        left: 0,
                                        backgroundColor: '#eee',
                                    }
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}
