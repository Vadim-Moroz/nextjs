import React, {FC} from 'react';
import {IComment} from "@/src/models/IComment";

type CommentPropsType ={
    comment:IComment
}
const CommentComponent:FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {comment.name}
        </div>
    );
};

export default CommentComponent;