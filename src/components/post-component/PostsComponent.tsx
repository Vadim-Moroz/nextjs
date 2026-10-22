"use server"
import React from 'react';
import {getAll} from "@/src/services/api.service";
import PostComponent from "@/src/components/post-component/PostComponent";
import {IPost} from "@/src/models/IPost";

const PostsComponent =async () => {
    const posts =await getAll<IPost[]>('/posts');
    return (
        <div>
            {posts.map(post=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;