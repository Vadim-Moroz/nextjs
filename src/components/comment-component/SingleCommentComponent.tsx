"use server"
import React from 'react';
import {getById} from "@/src/services/api.service";
import {IComment} from "@/src/models/IComment";

const SingleCommentComponent =async () => {
    const comment =await getById<IComment>("/comments",'1')

    return (
        <div>
            {comment?.name}
        </div>
    );
};

export default SingleCommentComponent;