export interface HLOC {
    time: Date;
    high: number;
    low: number;
    open: number;
    volumefrom: number;
    volumeto: number;
    close: number;
    conversionType: string;
    conversionSymbol: string;
}

export interface HLOCRequest {
    Aggregated: boolean;
    TimeFrom: number;
    TimeTo: number;
    Data: HLOC[];
}