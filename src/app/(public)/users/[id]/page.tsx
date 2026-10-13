import React, {FC} from 'react';

type Props = {
    params: {id: string }
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