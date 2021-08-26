import React from 'react';
import { IconChangePassword, IconEditProfile, IconHistory, IconSignOut } from "../../assets";

export const dummyMenus = [
    {
        id: 1,
        name: 'Edit Profile',
        picture: <IconEditProfile />,
        page: 'EditProfile'
    },
    {
        id: 2,
        name: 'Change Password',
        picture: <IconChangePassword />,
        page: 'ChangePassword'
    },
    {
        id: 3,
        name: 'History Pemesanan',
        picture: <IconHistory />,
        page: 'History'
    },
    {
        id: 4,
        name: 'Sign Out',
        picture: <IconSignOut />,
        page: 'Login'
    }
];