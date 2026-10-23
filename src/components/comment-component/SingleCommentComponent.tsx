"use server"
import React from 'react';
import {getById} from "@/src/services/api.service";
import {IComment} from "@/src/models/IComment";

type Props = {
    id: string;
};

const SingleCommentComponent =async ({id}:Props) => {
    const comment =await getById<IComment>("/comments",id)

    return (
        <div>
            <h1>{comment?.name}</h1>
            <p>{comment?.body}</p>
            <p>Email автора: {comment?.email}</p>
            <hr/>
        </div>
    );
};

export default SingleCommentComponent;