import  { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

const SharedLayout = ({ children }) => { 
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        {children} 
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;


