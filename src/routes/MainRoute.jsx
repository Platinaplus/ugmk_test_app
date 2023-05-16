import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Container from "@mui/material/Container";
import { Main } from "../pages/Main";
import { PieChart } from "../pages/PieChart";
import React from "react";

export const MainRoute = () => {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/:factoryId/:month' element={<PieChart />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};
