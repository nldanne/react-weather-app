import { ReactComponent as GithubIcon} from '../../assets/github-icon.svg'
import './Header.scss';

function Header() {
  return (
    <div className="header__container">
      <h1 className='title'>React Weather App</h1>
      <div className='header__icon-container'>
        <a href="https://github.com/nldanne/react-weather-app">
          <GithubIcon />
        </a>
      </div>
    </div>
  )
}

export default Header;