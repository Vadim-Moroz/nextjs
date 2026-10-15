import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'CommentLayout metadata'
}
// export const  generateMetadata= async ({params}: { params:{id:string} }):Promise<Metadata> => {
//     const {id} = await params;
//     return {
//         title: `Users page title ${id}`,
//     }
// }
type Props = { children: React.ReactNode }
const CommentLayout = ({children}: Props) => {
  return (
      <div>
        <hr/>
        {children}
        <hr/>
      </div>
  );
};

export default CommentLayout;