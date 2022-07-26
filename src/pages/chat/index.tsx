import { Input } from '@nextui-org/react';
import { SendButton } from "./SendButton";
import { SendIcon } from "./SendIcon";
import { useEffect } from 'react';
import  io  from 'socket.io-client';


const options = {
    transports: ['websocket'],
};

 


export default function Chat() {
   
    useEffect(()=>{
     console.log(233)
     
     
    },[])

    return (
        <div className='main'>
            <div className='message'>123</div>
            <div className='input'>
                <Input
                    clearable
                    contentRightStyling={false}
                    placeholder="Type your message..."
                    contentRight={
                        <SendButton>
                        </SendButton>
                    }
                />
            </div>
        </div>
    )
}