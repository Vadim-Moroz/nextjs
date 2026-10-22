"use server"
import React from 'react';
import {IUser} from "@/src/models/IUser";
import {getById} from "@/src/services/api.service";

const SingleUserComponent = async () => {
    const user =await getById<IUser>('/users','1');
    return (
        <div>
            {user?.username}
        </div>
    );
};

export default SingleUserComponent;