import React, { ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

export default function HomePage() {

    const data = [
        { userId: 1, in_time: '2022-05-26 07:00:00', out_time: '2022-05-26 09:00:00' },
        { userId: 2, in_time: '2022-05-26 02:10:00', out_time: '2022-05-26 12:30:00' },
        { userId: 2, in_time: '2022-04-25 02:10:00', out_time: '2022-04-26 12:30:00' },
        { userId: 1, in_time: '2022-05-26 05:00:00', out_time: '2022-05-26 06:00:00' },
    ];
    let totalMinutes = 0;
    let seconds = 0;
    let result: any = {};

    for (var i = 0; i < data.length; i++) {
        const userId = data[i].userId;
        const inTime = moment(data[i].in_time);
        const outTime = moment(data[i].out_time);
        const duration = moment.duration(outTime.diff(inTime));
        const hours = duration.asHours();
        const minutes = duration.asMinutes();

        const days: any = duration.asDays().toFixed(0);
        //console.log(days);

        if (!result[userId]) {
            result[userId] = {};
        }
        const userData = result[userId];
        //console.log('Result', result);

        let startTime = inTime;
        for (let j = 0; j < hours; j++) {
            let endTime = startTime.clone().endOf('hour');
           
                const minutesSpend = moment.duration(endTime.diff(startTime)).asMinutes();
                const thisHour = startTime.format('h');
                startTime = endTime.add(1, 'second');

                if (!userData[thisHour]) {
                    userData[thisHour] = Math.round(minutesSpend);
                } else {
                    userData[thisHour] += Math.round(minutesSpend);
                }
            }
        

        if (minutes) {
            const finalHourStartTime = outTime.clone().startOf('hour');
            const thisHour = finalHourStartTime.format('h');
            const minutesSpendInFinalHour = moment.duration(outTime.diff(finalHourStartTime)).asMinutes();
            // console.log(
            //     `Minutes spend in hour ${finalHourStartTime.format('h')} is ${Math.round(
            //         minutesSpendInFinalHour
            //     )}`
            //);
            if (!userData[thisHour]) {
                userData[thisHour] = Math.round(minutesSpendInFinalHour);
            } else {
                userData[thisHour] -= Math.round(minutesSpendInFinalHour);
            }
        }
    }
    const finalData: { userId: string; data: any; }[] = [];
    Object.keys(result).forEach((key) => {
        finalData.push({
            userId: key,
            data: result[key],
        });
    });
    //console.log('Final Data', finalData);
    return (
        <div className= 'container' >

        </div >
  )
 }

