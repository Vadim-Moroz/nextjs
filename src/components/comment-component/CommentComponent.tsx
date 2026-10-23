import React, {FC} from 'react';
import {IComment} from "@/src/models/IComment";
import Link from "next/link";

type CommentPropsType ={
    comment:IComment
}
const CommentComponent:FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            <Link href={`comments/${comment.id}`}>{comment.name}</Link>
            <hr/>
        </div>
    );
};

export default CommentComponent;