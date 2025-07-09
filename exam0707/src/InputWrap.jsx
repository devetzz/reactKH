
const InputWrap = (props) => {
  const text = props.text;
  const data = props.data;
  const setData = props.setData;
  const changeInputValue = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="input_wrap">
      <label>{text}</label>
      <input type="text" value={data} onChange={changeInputValue} />
    </div>
  );
};

export default InputWrap
