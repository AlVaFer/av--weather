import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/styles.css'; 

import CitiesList from 'components/CitiesList/index.jsx';
import Detail from 'components/Detail/index.jsx';
import SearchBar from 'components/SearchBar/index.jsx';
import { getAllCities } from 'store/actions';

function App() {
  const cities = useSelector((state) => state.cities);
  const currentIndex = useSelector((state) => state.currentIndex);
  const activeCity = useSelector((state) => state.activeCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities(cities));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="app" data-test="component-app">
      <section className="weather-section">
        <SearchBar cities={cities} />
        <CitiesList cities={cities} currentIndex={currentIndex} />
        <Detail activeCity={activeCity} currentIndex={currentIndex} />
      </section>
    </main>
  );
}

export default App;
