
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavMenu from '../components/NavMenu/NavMenu.jsx';

import styles from './App.module.scss';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';

const Home = lazy(() => import('../viewes/Home/Home.jsx'));
const Movies = lazy(() => import('../viewes/Movies/Movies.jsx'));
const MovieDetails= lazy(() => import('../viewes/MovieDetails/MovieDetails.jsx'));
const NotFound = lazy(() => import('../viewes/'));

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <NavMenu />
      </header>

      <Suspense fallback={<p>Is loading....</p>}>
      {/* <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#aeaae7"
            height={80}
            width={80}
            timeout={1000}
          />
        } */}
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;



