import { React, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginPostAsync } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin"
import KakaoLoginComponent from "./KakaoLoginComponent";

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    doLogin(loginParam)
      // loginSlice 의 비동기 호출
      .then(data => {
        console.log(data);
        if (data.error) {
          alert("이메일과 패스워드를 다시 확인하세요");
        } else {
          alert("로그인 성공");
          moveToPath('/');
        }
      })
  }

  // const handleClickLogin = (e) => {
  //   // 동기화 호출
  //   // dispatch(login(loginParam));
  //   // 비동기 호출
  //   dispatch(loginPostAsync(loginParam)) //loginSlice의 비동기 호출
  //     .unwrap()
  //     .then((data) => {
  //       if (data.error) {
  //         alert("이메일과 패스워드를 다시 확인하세요");
  //         setLoginParam({ ...initState });
  //       } else {
  //         alert("로그인 성공");
  //         navigate({ pathname: '/' }, { replace: true });
  //         //뒤로 가기 했을 때 로그인 화면을볼 수 없게 함
  //       }
  //       console.log("after unwrap...");
  //       console.log(data);
  //     });
  // };

  return (
    <>
      <h2 className="text-center mb-3">Login Component</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          name="email"
          type="email"
          placeholder="name@example.com"
          value={loginParam.email}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          name="pw"
          type="password"
          placeholder="Password"
          value={loginParam.pw}
          onChange={handleChange}
        />
      </FloatingLabel>
      <div className="d-grid gap-2 mt-3">
        <Button variant="outline-primary" onClick={handleClickLogin}>
          로그인
        </Button>
      </div>
      <KakaoLoginComponent />
    </>
  );
}
