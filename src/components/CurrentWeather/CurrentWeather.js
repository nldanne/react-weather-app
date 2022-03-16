import './CurrentWeather.scss';
import { ReactComponent as SunIcon} from '../../assets/clear-day.svg';
import { ReactComponent as ThermometerIcon} from '../../assets/thermometer.svg';
import { ReactComponent as HumidityIcon} from '../../assets/humidity.svg';
import { ReactComponent as WindyIcon} from '../../assets/wind-line.svg';

const CurrentWeather = () => {
  return (
    <div className="card__container">

      <section className="section__container">
        <h3 className='h3'>Current Weather</h3>
      </section>
    
      <div className="current-weather__container">
        <h2 className='city-name'>Amsterdam</h2>

        <div className='current-weather__wrapper'>

          <section className="current-weather__status">
            <div className='icon-temp'>
              <SunIcon className="weather-icon__big" /> 
              <p className='temperature'>13<span className='celsius'>&#8451;</span></p>
            </div>
            <h4>Sunny</h4>
          </section>

          <section className="current-weather__info">
            <div className='info-row'>
              <ThermometerIcon className='small-icon'/>
              <p>Feels like</p>
              <p>4<span>&#8451;</span></p>
            </div>
            <div className='info-row'>
              <HumidityIcon className='small-icon' />
              <p>Humidity</p>
              <p>54%</p>
            </div>
            <div className='info-row'>
              <WindyIcon className='smaller-icon' />
              <p>Wind</p>
              <p>26 km/h</p>
            </div>
          </section>

        </div>
      </div>

    </div>
  )
}

export default CurrentWeather;