import * as React from "react";
import * as ReactDom from "react-dom";
import { RootComponent } from "./common/components/RootComponent";
import { Map } from "immutable";
import configAppStore from "./core/configAppStore/index";
import { allModules } from "./ui/allModules";
const initialState = Map();
const { store, routes, history } = configAppStore(allModules, initialState);
ReactDom.render(React.createElement(RootComponent, { store: store, routes: routes, history: history }), document.getElementById('root'));
//# sourceMappingURL=index.js.map