import { HLOCRequest } from "./interfaces/hloc-interface";
require('dotenv').config()

const request = require('request');
const fetch = require('node-fetch');

export class HLOC {
    private base: string = 'https://min-api.cryptocompare.com/data/v2';
    private api_key: string = process.env.CRYPTOCOMPARE_API_KEY;
    constructor() { }

    async DailyHLOC(symbol: string = 'BTC', fiat: string = 'USD', limit: number = 5, lastDay: Date) {
        const unixTimestamp = lastDay.getTime() / 1000
        const endpoint = `/histoday?fsym=${symbol}&tsym=${fiat}&limit=${limit}&toTs=${unixTimestamp}&api_key=${this.api_key}`;
        const response = await fetch(this.base + endpoint);
        const json: HLOCRequest = (await response.json()).Data;
        json.Data.map(d => d.time = new Date((<any>d).time*1000));
        console.log(json);
        return json.Data;
    }

}