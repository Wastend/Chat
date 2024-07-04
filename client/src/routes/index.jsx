import { Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useEffect } from 'react';

const RouteMap = (routes) => {

    console.log(JSON.parse(localStorage.getItem('name')));

    return routes.map((route, index) => (
        <Route
            index
            path={route.path}
            element={<PageWrapper title={route.title}>
                {route.element}
            </PageWrapper>}
            key={index}
        />
    ));
};

export const routes = RouteMap(appRoutes);