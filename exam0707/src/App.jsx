import './App.css'
import { useState } from 'react';
import User from './User';
import InputWrap from './InputWrap';

function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const registUser = () => {
    const user = { name, age, gender, phone };
    const newUserList = [...userList, user];
    setUserList(newUserList);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };

  const deleteUser = (index) => {
    const updatedList = userList.filter((_, i) => i !== index);
    setUserList(updatedList);
  };

  const loadUserToEdit = (index) => {
    const user = userList[index];
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setPhone(user.phone);
    setEditIndex(index); // 수정 중 표시
  };

  const modifyUser = () => {
    if (editIndex === null) return;

    const updatedUser = { name, age, gender, phone };
    const updatedList = [...userList];
    updatedList[editIndex] = updatedUser;
    setUserList(updatedList);

    // 초기화
    setName("");
    setAge("");
    setGender("");
    setPhone("");
    setEditIndex(null);
  };

  const handleSearch = () => {
    setSearchKeyword(searchTerm);
  };

  const showAll = () => {
    setSearchTerm("");
    setSearchKeyword("");
  };

  const filteredUserList = userList.filter((user) =>
    user.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  
  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <div className="search-wrap">
        <InputWrap text="이름 검색" data={searchTerm} setData={setSearchTerm} />
        <button onClick={handleSearch}>검색</button>
        <button onClick={showAll}>전체 보기</button>
      </div>
      <hr></hr>
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserList.map((item) => {
            const originalIndex = userList.findIndex(user => user.phone === item.phone);
            return <User key={"user" + originalIndex} item={item} index={originalIndex} onEdit={loadUserToEdit} onDelete={deleteUser} />;
          })}
        </tbody>
      </table>
      <div className="regist-wrap">
        <h3>{editIndex !== null ? "회원 정보 수정" : "회원 정보 등록"}</h3>
        <hr></hr>
        <InputWrap text="이름" data={name} setData={setName} />
        <InputWrap text="나이" data={age} setData={setAge} />
        <InputWrap text="성별" data={gender} setData={setGender} />
        <InputWrap text="전화번호" data={phone} setData={setPhone} />
        {editIndex !== null ? (
          <button onClick={modifyUser}>수정 완료</button>
        ) : (
          <button onClick={registUser}>회원 등록</button>
        )}
      </div>
    </div>
  );
}

export default App
