import { Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper"

const RouteMap = (routes) => {
    return routes.map((route, index) => (
        <Route
            index
            path={route.path}
            element={<PageWrapper >
                {route.element}
            </PageWrapper>}
            key={index}
        />
    ));
};

export const routes = RouteMap(appRoutes);