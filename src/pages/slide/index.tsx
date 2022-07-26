import { Collapse, Text, User } from "@nextui-org/react";
import UserCard from "../component/userCard";
import './index.less';
import { useNavigate } from "react-router-dom";


export default function Silde(props) {
    let navigate = useNavigate();
    function goChat(){
        navigate('/Chat');
    }
    return (
        <div className="silde">
            <Collapse.Group>
                <Collapse
                    title="BBS"
                    showArrow={false}
                >
                </Collapse>
                <Collapse
                    title="聊天室"
                    showArrow={false}
                    onClick={goChat}
                >
                </Collapse>
                <Collapse title="联系人">
                    <div className="UserCard">
                        <User
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            name="Ariana Wattson" />
                    </div>
                    <div className="UserCard">
                        <User
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            name="Ariana Wattson" />
                    </div>
                </Collapse>
            </Collapse.Group>
        </div>
    )
}