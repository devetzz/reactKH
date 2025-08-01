import { useState } from "react";

// 사용자가 만든 Hooks (custom Hooks)
function useMyInput(){
    const [input, setInput] = useState("");
    
    const onChangeInput = (e)=>{
        setInput(e.target.value);
    };

    return [input, onChangeInput];
}

export default useMyInput;