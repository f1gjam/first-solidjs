import 'flowbite';
import 'ka-table/style.css';

import { Table, useTable } from 'ka-table';
import { DataType, FilteringMode, EditingMode, SortDirection, SortingMode, PagingPosition } from 'ka-table/enums';

import { signal } from '@preact/signals-react'
import { format } from "date-fns";

import type { StravaStatsDataType } from '../models/myTypes'
import { TopAthleteTable } from './TopAthleteTable';

const emptyData: StravaStatsDataType = ({} as StravaStatsDataType);
export const fetchedData = signal<StravaStatsDataType>(emptyData);

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://www.unixcraft.dev';

export async function fetchData(selectedDate: string) {
    if (selectedDate === "") {
        console.log("selectedDate is empty - setting to current month");
        selectedDate = format(new Date(), "MMMM-yyyy").toString()
    }
    let params = new URLSearchParams({ monthSelected: selectedDate });

    let apiUrl = `${API_BASE_URL}/dataapi/runner_totals?${params}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data: StravaStatsDataType = await response.json();
    fetchedData.value = data;
}

fetchData("");

export function MaleRunningTable() {
    const table = useTable();

    // Get top 10 for each category
    const getTop10 = (sortKey: string) => {
        if (!fetchedData.value?.MaleSorted) return [];
        return [...fetchedData.value.MaleSorted]
            .sort((a: any, b: any) => (b[sortKey] || 0) - (a[sortKey] || 0))
            .slice(0, 10)
            .map((athlete: any) => ({
                AthleteName: athlete.AthleteName,
                Value: athlete[sortKey]
            }));
    };

    return (
        <>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4" >
                <h2 className="text-2xl font-bold p-4">Mens Running Leaderboard</h2>

                <Table
                    data={fetchedData.value?.MaleSorted}
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

            {/* Top 10 Tables Section */}
            <div className="mx-4 my-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top 10 Running Rankings</h2>
                
                {/* Distance and Elevation Rankings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <TopAthleteTable 
                        title="Top Total Distance" 
                        data={getTop10('TotalDistance')} 
                        valueLabel="Distance (km)" 
                    />
                    <TopAthleteTable 
                        title="Top Total Elevation" 
                        data={getTop10('TotalElevation')} 
                        valueLabel="Elevation (m)" 
                    />
                </div>

                {/* Single Run Rankings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TopAthleteTable 
                        title="Longest Single Run" 
                        data={getTop10('LongestSingleOutdoorRun')} 
                        valueLabel="Distance (km)" 
                    />
                    <TopAthleteTable 
                        title="Most Elevation in Single Run" 
                        data={getTop10('LongestSingleOutdoorElevation')} 
                        valueLabel="Elevation (m)" 
                    />
                </div>
            </div>
        </>
    )
}
