import React from 'react';
import {Metadata} from "next";
import SinglePostComponent from "@/src/components/post-component/SinglePostComponent";

type Props = {
    params: Promise<{ id: string }>
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post page title ${id}`,
    }
}
const PostPage = async ({params}:Props) => {
    const {id} = await params;
    return (
        <div>
            <SinglePostComponent id={id}/>
        </div>
    );
};

export default PostPage;