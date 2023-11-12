import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import SelectPanelPage from "./components/select/SelectPanelPage";
import NavBar from "./components/navigate/NavBar";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={ <App /> }>
            </Route>
            <Route path="/custominfo" element={<SelectPanelPage/>}/>
        </Routes>
    </BrowserRouter>
);

