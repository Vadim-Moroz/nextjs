import React from 'react';
import {Metadata} from "next";
import SinglePostComponent from "@/src/components/post-component/SinglePostComponent";

type Props = {
    params: {id: string }
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post page title ${id}`,
    }
}
const PostPage = async () => {
    return (
        <div>
            <SinglePostComponent/>
        </div>
    );
};

export default PostPage;