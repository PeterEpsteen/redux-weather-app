import React from 'react';
import LineChart from 'react-linechart';

export default (props) => {
    if(!props.data) {
        return ( <div>Loading...</div> );
    }
    return (
        <LineChart width={180} height={140}
                        data={props.data}
                        hideXLabel= {true}
                        hideYLabel = {true}
                        hideXAxis = {true}
                        hideYAxis = {true}  
                        hidePoints ={ true }
                    />
    );
}