"use server"
import React from 'react';
import {IUser} from "@/src/models/IUser";
import {getById} from "@/src/services/api.service";

type Props = {
    id: string;
};

const SingleUserComponent = async ({id}:Props) => {
    const user =await getById<IUser>('/users',id);
    return (
        <div>
            <h1>{user?.name}</h1>
            <p>{user?.username}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default SingleUserComponent;