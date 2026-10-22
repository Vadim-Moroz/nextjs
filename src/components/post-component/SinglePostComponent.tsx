"use server"
import React from 'react';
import {getById} from "@/src/services/api.service";
import {IPost} from "@/src/models/IPost";

const SinglePostComponent = async () => {
    const post =await getById<IPost>("/posts",'1')
    return (
        <div>
            {post?.title}
        </div>
    );
};

export default SinglePostComponent;