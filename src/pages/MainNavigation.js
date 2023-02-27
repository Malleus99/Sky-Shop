import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/header/Footer';

const MainNavigation = () => {
  return (
    <Fragment>
      <Header />
      <main className='maincontainer'>
        <div className='mainchild'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainNavigation;
