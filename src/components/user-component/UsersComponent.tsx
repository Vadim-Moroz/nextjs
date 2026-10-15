"use client"
import React, {useEffect, useState} from 'react';
import {IUser} from "@/src/models/IUser";
import UserComponent from "@/src/components/user-component/UserComponent";
import {getAll} from "@/src/services/api.service";

const UsersComponent = () => {
    const [users,setUser] = useState<IUser[]>([])
    useEffect(() => {
        getAll<IUser[]>("/users").then(value => setUser(value))
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;