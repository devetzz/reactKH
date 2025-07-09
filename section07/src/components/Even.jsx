import { useEffect } from "react";

const Even = ()=>{
    // unmount 기능
    useEffect(()=>{
        // mount 될때 작동
        console.log('Even Mount');
        
        return ()=>{
            // unmount 될때 작동
            console.log('Even Unmount');
        };
    },[]);

    return <div>짝수입니다</div>
};

export default Even;