import { eveningdojistar, eveningstar } from "technicalindicators";
import { HLOC } from "./crypto-compare-OHLC";
var bullishengulfingpattern =require('technicalindicators').bullishengulfingpattern;

class App {
    /** Entry point of our app */
    public async start() {
        const heloc = new HLOC();
        heloc.DailyHLOC('ETH', 'USD', 2, new Date('11/25/2020')).then(res => {
            var input = {
                open: [],
                high: [],
                close: [],
                low: [],
              }

            res.forEach(day => {
                console.log('Adding values for day:', day.time);
                input.high.push(day.high);
                input.low.push(day.low);
                input.open.push(day.open);
                input.close.push(day.close);
            })
              // var result      = eveningstar(input);
              var result      = eveningdojistar(input);
              console.log('Is Evening Doji Star Pattern? :' +result);


            // console.log(res);
            // var twoDayBullishInput = {
            //     open: [],
            //     high: [],
            //     close: [],
            //     low: [],
            //   }
            // res.forEach(day => {
            //     console.log('Adding values for day:', day.time);
            //     twoDayBullishInput.high.push(day.high);
            //     twoDayBullishInput.low.push(day.low);
            //     twoDayBullishInput.open.push(day.open);
            //     twoDayBullishInput.close.push(day.close);
            // })
            // var result      = bullishengulfingpattern(twoDayBullishInput);
            // console.log('Is BullishEngulfingPattern? :', result);
        });
    }
}

const app = new App();
app.start();
