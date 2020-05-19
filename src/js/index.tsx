import * as React from "react";
import * as ReactDom from "react-dom";
import { RootComponent } from "./common/components/RootComponent";
// @ts-ignore
import { Map } from "immutable";
import configAppStore from "./core/configAppStore/index";
import { allModules } from "./ui/allModules";

const initialState = Map();

// @ts-ignore
const { store, routes, history } = configAppStore(allModules, initialState);

ReactDom.render(
    <RootComponent store={store} routes={routes} history={history} />,
    document.getElementById('root')
);
