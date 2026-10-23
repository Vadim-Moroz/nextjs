import React from 'react';
import {Metadata} from "next";
import SingleCommentComponent from "@/src/components/comment-component/SingleCommentComponent";

type Props = {
    params: Promise<{ id: string }>
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Comment page title ${id}`,
    }
}
const CommentPage= async ({params}:Props) => {
    const {id} = await params;
    return (
        <div>
            <SingleCommentComponent id={id}/>
        </div>
    );
};

export default CommentPage;