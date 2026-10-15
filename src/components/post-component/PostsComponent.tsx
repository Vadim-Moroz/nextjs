"use client"
import React, {useEffect, useState} from 'react';
import {getAll} from "@/src/services/api.service";
import {IPost} from "@/src/models/IPost";
import PostComponent from "@/src/components/post-component/PostComponent";

const PostsComponent = () => {
    const [posts,setPost] = useState<IPost[]>([])
    useEffect(() => {
        getAll<IPost[]>("/posts").then(value => setPost(value))
    },[])
    return (
        <div>
            {posts.map(post=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;