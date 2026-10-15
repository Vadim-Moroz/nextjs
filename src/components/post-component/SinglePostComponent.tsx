"use client"
import React, {useEffect, useState} from 'react';
import {getById} from "@/src/services/api.service";
import {IPost} from "@/src/models/IPost";

const SinglePostComponent = () => {
    const [post,setPost] = useState<IPost>()
    useEffect(() => {
        getById<IPost>("/posts",'1').then(value => setPost(value))
    },[])
    return (
        <div>
            {post?.title}
        </div>
    );
};

export default SinglePostComponent;