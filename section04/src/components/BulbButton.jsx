// Bulb Cpmponent(전구)
function BulbButton ({light, lightClickButton}) {
  // console.log(light);

  return (
  <div>
    <button onClick={()=>{lightClickButton()}}>
      {light === 'ON' ? '끄기' : '켜기'}
    </button>
  </div>
  );
};

export default BulbButton;