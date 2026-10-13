import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'UserLayout metadata'
}
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