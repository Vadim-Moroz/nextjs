import React, {FC} from 'react';
import {IUser} from "@/src/models/IUser";

type UserPropsType ={
    user:IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};

export default UserComponent;