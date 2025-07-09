function CountButton ({countClickButton}) {

  return (
  <div>
    <button onClick={()=>{countClickButton()}}> + </button>
  </div>
  );
}

export default CountButton;