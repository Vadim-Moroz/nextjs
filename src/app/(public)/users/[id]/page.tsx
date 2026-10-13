import React, {FC} from 'react';
import {Metadata} from "next";

type Props = {
    params: {id: string }
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Users page title ${id}`,
    }
}
const UserPage:FC<Props> = async ({params}) => {

    const {id} = await params
    console.log(id);
    return (
        <div>
            user page {id}
        </div>
    );
};

export default UserPage;