import React, {FC} from 'react';
import {IPost} from "@/src/models/IPost";
import Link from "next/link";

type PostPropsType ={
    post:IPost
}
const PostComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
            <hr/>
        </div>
    );
};

export default PostComponent;