import React from 'react';
import "./App.scss";
import { ErrorBoundaryPage } from "../pages/ErrorBoundary/ErrorBoundaryPage";
import  { MainRoute } from '../routes/MainRoute'

const App = () => {
  return (
    <div className="page-layout-container">
      <ErrorBoundaryPage>
        <MainRoute />
      </ErrorBoundaryPage>
    </div>
  );
}

export default App;
