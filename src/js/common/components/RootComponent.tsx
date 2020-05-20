import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Route, Switch } from "react-router-dom";
import { IRouter } from "../ts/interfaces";

class RootComponent extends React.Component<IRouter, {}> {
    render() {
        const { routes, history, store } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <Switch>
                        {routes.map((route, index) => {
                            return <Route {...route} key={index}/>
                        })}
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export { RootComponent };