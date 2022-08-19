import { Progress } from 'antd';

export function ProgressBarElementor (){
    return(
        <>
            <Progress percent={40} strokeColor="#ebaa02"/>
            <Progress percent={38} strokeColor="orange"/>
            <Progress percent={88} strokeColor="#6470e8" />
        </>
    )
}