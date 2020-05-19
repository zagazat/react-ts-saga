import * as React from "react";
// @ts-ignore
import { Provider } from "react-redux";
// @ts-ignore
import { ConnectedRouter } from "connected-react-router/immutable";
// @ts-ignore
import { Route, Switch } from "react-router-dom";
import { IRouter } from "../ts/interfaces";

class RootComponent extends React.Component<IRouter, {}> {
    render() {
        const { routes, history, store } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <Switch>
                        {routes.map(route => {
                            return <Route {...route}/>
                        })}
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export { RootComponent };