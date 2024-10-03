import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import MyRoutes from './routes';
import GlobalStyles, { PageBody } from './styles/GlobalStyles';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Generics/Header';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <PageBody>
        <MyRoutes />
      </PageBody>
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable={'mouse'}
        theme="light"
      />
    </>
  );
}

export default App;
