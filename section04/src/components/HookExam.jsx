import useMyInput from "./useMyInput";

function HookExam(props){
  // const [input, setInput] = useState("");

  // const onChangeInput = (e)=>{
  //   setInput(e.target.value);
  // };
  const [input1, onChangeInput1] = useMyInput();
  const [input2, onChangeInput2] = useMyInput();

  return (
    <>
    <div>
      <input value={input1} name="phone" onChange={onChangeInput1} />
      <input value={input2} name="name" onChange={onChangeInput2} />
    </div>
    </>
  )
}

export default HookExam;