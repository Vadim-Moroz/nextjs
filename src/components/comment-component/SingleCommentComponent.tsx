"use client"
import React, {useEffect, useState} from 'react';
import {getById} from "@/src/services/api.service";
import {IComment} from "@/src/models/IComment";

const SingleCommentComponent = () => {
    const [comment,setComment] = useState<IComment>()
    useEffect(() => {
        getById<IComment>("/comments",'1').then(value => setComment(value))
    },[])
    return (
        <div>
            {comment?.name}
        </div>
    );
};

export default SingleCommentComponent;