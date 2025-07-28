import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
import jwtAxios from "../util/jwtUtil";

// 서버주소 및 url(공통주소)
const host = `${API_SERVER_HOST}/api/member`;

export const loginPost = async (loginParam) => {
  // axios는 json 데이터를 보내는게 기본방식,
  // form 데이터를 보낼때는 content-type : x-www-form-urlencoded 을 지정해야 한다.
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", loginParam.email);
  form.append("password", loginParam.pw);

  const res = await axios.post(`${host}/login`, form, header);

  return res.data;
};

export const modifyMember = async (member) => {
  const res = await jwtAxios.put(`${host}/modify`, member);

  return res.data;
}