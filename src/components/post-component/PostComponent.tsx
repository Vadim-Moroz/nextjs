import React, {FC} from 'react';
import {IPost} from "@/src/models/IPost";

type PostPropsType ={
    post:IPost
}
const PostComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;