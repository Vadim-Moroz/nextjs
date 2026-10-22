"use server"
import React from 'react';
import {IUser} from "@/src/models/IUser";
import UserComponent from "@/src/components/user-component/UserComponent";
import {getAll} from "@/src/services/api.service";

const UsersComponent = async () => {
    const users =await getAll<IUser[]>('/users');
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;