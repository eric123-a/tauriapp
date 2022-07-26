import './index.less';
import { Image, User, Tooltip, Avatar } from "@nextui-org/react";
import Login from './component/loginModel/login';
import { useState } from 'react';


export default function Header() {
    const [showLogin,setShowLogin] = useState(false);

    return (
        <div className='head'>
            <User
                
                name="Ariana Wattson"
            />
            <Tooltip content={"登录"}>
                <Avatar
                   
                    onClick={() => setShowLogin(true)}
                />
            </Tooltip>
            <Login visible={showLogin} />
        </div>
    )
}