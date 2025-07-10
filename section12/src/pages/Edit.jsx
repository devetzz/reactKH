import { useParams } from "react-router-dom";

const Edit = ()=>{
    const params = useParams();
    console.log(params);
    return(
        <div>
            EDIT/{params.id}
        </div>
    );
};

export default Edit;