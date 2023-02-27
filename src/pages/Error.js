import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../components/header/Footer';
import Header from '../components/header/Header';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <Header />
      <main className='maincontainer'>
        <h1>An error occured!</h1>
        <p>{error.message}</p>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
