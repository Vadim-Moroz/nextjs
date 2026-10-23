"use server"
import React from 'react';
import {getById} from "@/src/services/api.service";
import {IPost} from "@/src/models/IPost";

type Props = {
    id: string;
};

const SinglePostComponent = async ({id}:Props) => {
    const post =await getById<IPost>("/posts",id)
    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <hr/>
        </div>
    );
};

export default SinglePostComponent;