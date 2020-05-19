import * as React from "react";

class LoginView extends React.Component<any, any> {
    render() {
        return (
            <form>
                <input type="text" placeholder='введите имя'/>
            </form>
        )
    }
}

export {LoginView};