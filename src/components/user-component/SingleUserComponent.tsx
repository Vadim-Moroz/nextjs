"use client"
import React, {useEffect, useState} from 'react';
import {IUser} from "@/src/models/IUser";
import {getById} from "@/src/services/api.service";

const SingleUserComponent = () => {
    const [user,setUser] = useState<IUser>()
    useEffect(() => {
        getById<IUser>("/users",'1').then(value => setUser(value))
    },[])
    return (
        <div>
            {user?.username}
        </div>
    );
};

export default SingleUserComponent;