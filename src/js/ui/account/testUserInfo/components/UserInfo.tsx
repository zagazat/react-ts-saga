import React from "react";
import {UserType} from "../ts/types";

// пример функционального компонента

export const UserInfo: React.FC<UserType> = (user: UserType) => <li>{user.name}, {user.address.city}</li>;