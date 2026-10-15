import React from 'react';
import {Metadata} from "next";
import SingleUserComponent from "@/src/components/user-component/SingleUserComponent";

type Props = {
    params: {id: string }
}
export const  generateMetadata= async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Users page title ${id}`,
    }
}
const UserPage = async () => {

    return (
        <div>
            <SingleUserComponent/>
        </div>
    );
};

export default UserPage;