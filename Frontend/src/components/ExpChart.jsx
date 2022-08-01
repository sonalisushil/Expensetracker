import React from 'react';
import Chartlist from './Chartlist';

const ExpChart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <Chartlist
                //key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                />
            ))}
        </div>
    );
} ;
export default ExpChart;