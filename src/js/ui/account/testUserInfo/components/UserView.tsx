import React, {Component} from "react";
import {connect} from "react-redux";
import {getPostsAction, testAction} from "../actions/testActions";
import {IUserInfoStateProps, IUserInfoDispatchProps, IUserInfoOwnProps} from "../ts/interfaces";
import {TestStateType} from "../ts/types";
import {UserInfo} from "./UserInfo";

// пример компонента основанного на классе

class UserView extends Component<IUserInfoOwnProps> {
    componentDidMount(): void {
        this.props.getTestUsers();
        this.props.getPosts();
    }

    render() {
        const { users, posts } = this.props;
        return (<>
            <h2>Users</h2>
            {!users.loading && users.data.length > 0 ? users.data.map(user => <UserInfo key={user.id} {...user}/>) : 'loading...'}

            <h2>Posts</h2>
            Count: {!posts.loading && posts.data.length || 0}
        </>)
    }
}

const mapDispatchToProps = {
    getTestUsers: testAction.request,
    getPosts: getPostsAction.request
};

const mapStateToProps = (state: TestStateType) => {
    return {
        users: state.test.users,
        posts: state.test.posts,
    }
};

const UserViewComponent = connect<IUserInfoStateProps, IUserInfoDispatchProps>(mapStateToProps, mapDispatchToProps)(UserView);

export { UserViewComponent };