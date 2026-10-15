import React from 'react';
import {Metadata} from "next";
import SingleCommentComponent from "@/src/components/comment-component/SingleCommentComponent";

type Props = {
    params: {id: string }
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Comment page title ${id}`,
    }
}
const CommentPage= async () => {

    return (
        <div>
            <SingleCommentComponent/>
        </div>
    );
};

export default CommentPage;