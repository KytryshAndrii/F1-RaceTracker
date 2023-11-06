import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import SelectPanelPage from "./components/select/SelectPanelPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
            </Route>
            <Route path="/custominfo" element={<SelectPanelPage/>}/>
        </Routes>
    </BrowserRouter>
);

