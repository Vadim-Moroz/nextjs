import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'UserLayout metadata'
}
// export const  generateMetadata= async ({params}: { params:{id:string} }):Promise<Metadata> => {
//     const {id} = await params;
//     return {
//         title: `Users page title ${id}`,
//     }
// }
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
  return (
      <div>
        <hr/>
        {children}
        <hr/>
      </div>
  );
};

export default UserLayout;