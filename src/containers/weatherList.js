import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class WeatherList extends Component{
    renderWeather = (cityData) => {
        const temps = cityData.list.map(forecast => forecast.main.temp)
        const pressures = cityData.list.map(forecast => forecast.main.pressure)
        const humidities = cityData.list.map(forecast => forecast.main.humidity)

        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="blue" />
                </td>
                <td>
                    <Chart data={pressures} color="orange" />
                </td>
                <td>
                    <Chart data={humidities} color="red" />
                </td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps( {weather} ){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);