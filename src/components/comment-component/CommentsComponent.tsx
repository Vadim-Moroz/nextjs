"use server"
import React from 'react';
import {getAll} from "@/src/services/api.service";
import {IComment} from "@/src/models/IComment";
import CommentComponent from "@/src/components/comment-component/CommentComponent";

const CommentsComponent =async () => {
    const comments =await getAll<IComment[]>('/comments');
    return (
        <div>
            {comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;