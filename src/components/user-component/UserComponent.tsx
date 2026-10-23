import React, {FC} from 'react';
import {IUser} from "@/src/models/IUser";
import Link from "next/link";

type UserPropsType ={
    user:IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <Link href={`users/${user.id}`}>{user.username}</Link>
        </div>
    );
};

export default UserComponent;