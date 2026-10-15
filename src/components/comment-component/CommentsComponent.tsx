"use client"
import React, {useEffect, useState} from 'react';
import {getAll} from "@/src/services/api.service";
import {IComment} from "@/src/models/IComment";
import CommentComponent from "@/src/components/comment-component/CommentComponent";

const CommentsComponent = () => {
    const [comments,setComment] = useState<IComment[]>([])
    useEffect(() => {
        getAll<IComment[]>("/comments").then(value => setComment(value))
    },[])
    return (
        <div>
            {comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;