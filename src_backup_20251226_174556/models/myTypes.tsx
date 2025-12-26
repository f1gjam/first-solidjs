export interface StravaStatsDataType {
    Male: Male
    MaleSorted: MaleSorted[]
    Female: Female
    FemaleSorted: FemaleSorted[]
}

export interface Male {
    TopAthleteTotalOutdoorDistance: TopAthleteTotalOutdoorDistance
    TopAthleteTotalIndoorDistance: TopAthleteTotalIndoorDistance
    TopAthleteTotalDistance: TopAthleteTotalDistance
    TopAthleteTotalOutdoorElevation: TopAthleteTotalOutdoorElevation
    TopAthleteTotalIndoorElevation: TopAthleteTotalIndoorElevation
    TopAthleteTotalElevation: TopAthleteTotalElevation
    TopAthleteSingleOutdoorRide: TopAthleteSingleOutdoorRide
    TopAthleteSingleIndoorRide: TopAthleteSingleIndoorRide
    TopAthleteSingleIndoorElevation: TopAthleteSingleIndoorElevation
    TopAthleteSingleOutdoorElevation: TopAthleteSingleOutdoorElevation
}

export interface TopAthleteTotalOutdoorDistance {
    Name: string
    Value: number
}

export interface TopAthleteTotalIndoorDistance {
    Name: string
    Value: number
}

export interface TopAthleteTotalDistance {
    Name: string
    Value: number
}

export interface TopAthleteTotalOutdoorElevation {
    Name: string
    Value: number
}

export interface TopAthleteTotalIndoorElevation {
    Name: string
    Value: number
}

export interface TopAthleteTotalElevation {
    Name: string
    Value: number
}

export interface TopAthleteSingleOutdoorRide {
    Name: string
    Value: number
}

export interface TopAthleteSingleIndoorRide {
    Name: string
    Value: number
}

export interface TopAthleteSingleIndoorElevation {
    Name: string
    Value: number
}

export interface TopAthleteSingleOutdoorElevation {
    Name: string
    Value: number
}

export interface MaleSorted {
    AthleteID: number
    AthleteName: string
    AthleteSex: string
    OutdoorDistances?: number[]
    IndoorDistances?: number[]
    OutdoorRideTimeInSeconds?: number[]
    IndoorRideTimeInSeconds?: number[]
    OutdoorElapsedTimeInSeconds?: number[]
    IndoorElapsedTimeInSeconds?: number[]
    TotalOutdoorRideTimeInSeconds: number
    TotalIndoorRideTimeInSeconds: number
    TotalOutdoorElapsedTimeInSeconds: number
    TotalIndoorElapsedTimeInSeconds: number
    TotalOutdoorDistance: number
    TotalIndoorDistance: number
    TotalDistance: number
    OutdoorElevations?: number[]
    IndoorElevations?: number[]
    TotalOutdoorElevation: number
    TotalIndoorElevation: number
    TotalElevation: number
    PercentIndoor: number
    TopOutdoorRide: number
    TopIndoorRide: number
    TopIndoorElevation: number
    TopOutdoorElevation: number
    LongestOutdoorRide: number
    LongestIndoorRide: number
    HighestOutdoorElevation: number
    HighestIndoorElevation: number
}

export interface Female {
    TopAthleteTotalOutdoorDistance: TopAthleteTotalOutdoorDistance2
    TopAthleteTotalIndoorDistance: TopAthleteTotalIndoorDistance2
    TopAthleteTotalDistance: TopAthleteTotalDistance2
    TopAthleteTotalOutdoorElevation: TopAthleteTotalOutdoorElevation2
    TopAthleteTotalIndoorElevation: TopAthleteTotalIndoorElevation2
    TopAthleteTotalElevation: TopAthleteTotalElevation2
    TopAthleteSingleOutdoorRide: TopAthleteSingleOutdoorRide2
    TopAthleteSingleIndoorRide: TopAthleteSingleIndoorRide2
    TopAthleteSingleIndoorElevation: TopAthleteSingleIndoorElevation2
    TopAthleteSingleOutdoorElevation: TopAthleteSingleOutdoorElevation2
}

export interface TopAthleteTotalOutdoorDistance2 {
    Name: string
    Value: number
}

export interface TopAthleteTotalIndoorDistance2 {
    Name: string
    Value: number
}

export interface TopAthleteTotalDistance2 {
    Name: string
    Value: number
}

export interface TopAthleteTotalOutdoorElevation2 {
    Name: string
    Value: number
}

export interface TopAthleteTotalIndoorElevation2 {
    Name: string
    Value: number
}

export interface TopAthleteTotalElevation2 {
    Name: string
    Value: number
}

export interface TopAthleteSingleOutdoorRide2 {
    Name: string
    Value: number
}

export interface TopAthleteSingleIndoorRide2 {
    Name: string
    Value: number
}

export interface TopAthleteSingleIndoorElevation2 {
    Name: string
    Value: number
}

export interface TopAthleteSingleOutdoorElevation2 {
    Name: string
    Value: number
}

export interface FemaleSorted {
    AthleteID: number
    AthleteName: string
    AthleteSex: string
    OutdoorDistances?: number[]
    IndoorDistances?: number[]
    OutdoorRideTimeInSeconds?: number[]
    IndoorRideTimeInSeconds?: number[]
    OutdoorElapsedTimeInSeconds?: number[]
    IndoorElapsedTimeInSeconds?: number[]
    TotalOutdoorRideTimeInSeconds: number
    TotalIndoorRideTimeInSeconds: number
    TotalOutdoorElapsedTimeInSeconds: number
    TotalIndoorElapsedTimeInSeconds: number
    TotalOutdoorDistance: number
    TotalIndoorDistance: number
    TotalDistance: number
    OutdoorElevations?: number[]
    IndoorElevations?: number[]
    TotalOutdoorElevation: number
    TotalIndoorElevation: number
    TotalElevation: number
    PercentIndoor: number
    TopOutdoorRide: number
    TopIndoorRide: number
    TopIndoorElevation: number
    TopOutdoorElevation: number
    LongestOutdoorRide: number
    LongestIndoorRide: number
    HighestOutdoorElevation: number
    HighestIndoorElevation: number
}
