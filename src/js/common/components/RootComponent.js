import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Route, Switch } from "react-router-dom";
class RootComponent extends React.Component {
    render() {
        const { routes } = this.props;
        return (React.createElement(Provider, { store: this.props.store },
            React.createElement(ConnectedRouter, { history: this.props.history },
                React.createElement(Switch, null, routes.map(route => {
                    return React.createElement(Route, Object.assign({}, route));
                })))));
    }
}
export { RootComponent };
//# sourceMappingURL=RootComponent.js.map