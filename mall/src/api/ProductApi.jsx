import axios from 'axios';

// 서버 주소
export const API_SERVER_HOST = 'http://localhost:8080';
const host = `${API_SERVER_HOST}/api/products`;

// 선택

// 전체리스트(페이징)
export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const res = await axios.get(`${host}/list`, {
        params: { page: page, size: size },
    });
    return res.data;
};

// 삽입
export const postAdd = async (product) => {
    //파일업로드 할때에는 기본값인 ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨
    const header = { headers: { 'Content-Type': 'multipart/form-data' } };
    const res = await axios.post(`${host}/`, product, header);
    return res.data;
};

// 삭제

// 수정
