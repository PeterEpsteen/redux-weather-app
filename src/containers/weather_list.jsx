import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        if(!cityData) {
            return;
        }
        const name = cityData.city.name;
        const temps = cityData.list.map((data, i) => {return {x: i, y: data.main.temp}});
        const tempsData = [{color: 'steelblue', points: [...temps]}];
        const pressure = cityData.list.map((data, i) => {return {x: i, y: data.main.pressure}});
        const pressureData = [{color: 'red', points: [...pressure]}];
        const humidity = cityData.list.map((data, i) => {return {x: i, y: data.main.humidity}});
        const humidityData = [{color: 'yellow', points: [...humidity]}];

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data = {tempsData} />
                </td>
                <td>
                    <Chart data = {pressureData} />
                </td>
                <td>
                    <Chart data = {humidityData} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="weather-list">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);