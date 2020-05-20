import React from "react";
import ReactDom from "react-dom";
import { RootComponent } from "./common/components/RootComponent";
import { Map } from "immutable";
// @ts-ignore
import reduxApp from './core/reduxApp'
import { allModules } from "./ui/allModules";

const initialState = {};
const { store, routes, history } = reduxApp(allModules, initialState);

ReactDom.render(
    <RootComponent store={store} routes={routes} history={history} />,
    document.getElementById('root')
);
