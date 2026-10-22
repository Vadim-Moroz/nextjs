import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/add-car"}>Add car</Link></li>
        </ul>
    );
};

export default Menu;