import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <CurrentWeather />
      <Footer />
    </>
  )
}

export default Home;