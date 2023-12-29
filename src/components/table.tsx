import 'flowbite';
import { For, Show, createResource } from 'solid-js';
import type { StravaStatsDataType } from '../models/myTypes'

const fetchRiderData = async () => {
    const url = 'http://localhost:8080/dataapi/rider_totals'
    const res = await fetch(url)
    const data = await res.json()
    const statsData = data as StravaStatsDataType
    return statsData
}

export function Table() {
    const [riderData] = createResource(fetchRiderData)

    return (
        <div class="shadow-lg rounded-lg overflow-hidden mx-4 my-4 sm:mx-4 sm:my-4">
            <Show when={riderData()} fallback={<div><h2>Loading...</h2></div>}>

                <table id="leaderboard" class="w-full table-fixed">
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
                </table>
            </Show>

        </div>

    )
}