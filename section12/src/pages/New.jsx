import { useParams, useSearchParams } from "react-router-dom";

const New = ()=>{
    // useState() 비슷한 기능을 url 처리하는데 사용되어진다
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const updateNameParam = (name, age)=>{
        setSearchParams({name: name, age: age});
    };

    return(
        <div>
            NEW ?{searchParams.get('name')} <br />
            NEW ?{searchParams.get('age')} <br />
            <button onClick={()=>{updateNameParam("kdj", 20)}}>query String 값 변경하기</button>
        </div>
    );
};

export default New;