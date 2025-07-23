import { useState, useRef } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { postAdd } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal"
import InfoModal from "../common/InfoModal"
import useCustomMove from "../../hooks/useCustomMove";

const initState = { pname: '', pdesc: '', price: 0, files: [] };

const AddComponent = () => {
    const [product, setProduct] = useState({ ...initState });
    const uploadRef = useRef();
    // fetching 모달을 결정하는 state true이면 fetching 모달이 보이고, false 이면 사라진다.
    const [fetching, setFetching] = useState(false);
    // 모달창을 활성화 할 것인가
    const [infoModalOn, setInfoModalOn] = useState(false);
    const [result, setResult] = useState(null);
    const { moveToProductList } = useCustomMove();

    const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value;
        setProduct({ ...product });
    };

    // data Api Server 로 전송(register)
    const handleClickAdd = (e) => {
        const files = uploadRef.current.files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
        //other data
        formData.append("pname", product.pname);
        formData.append("pdesc", product.pdesc);
        formData.append("price", product.price);
        console.log(formData);
        setFetching(true);
        postAdd(formData).then(data => {
            setFetching(false);
            setInfoModalOn(true);
            setResult(data.result)
        })
    }

    // 모달창 close
    const closeModal = () => {
        setResult(null);
        moveToProductList({ page: 1 }) //모달 창이 닫히면 이동
    };

    return (
        <>
            <Container className="p-5">
                {fetching ? <FetchingModal /> : <></>}
                {result ?
                    <InfoModal show={infoModalOn} title={'Product Add Result'} content={`${result}번 등록 완료`} callbackFn={closeModal}
                    />
                    : <></>
                }
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control name="pname"
                            type="text" value={product.pname} onChange={handleChangeProduct} placeholder="Enter pname"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control name="pdesc" value={product.pdesc} as="textarea" rows={4}
                            onChange={handleChangeProduct}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" type="number" value={product.price}
                            onChange={handleChangeProduct} placeholder="Enter price"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Files</Form.Label>
                        <Form.Control ref={uploadRef} type="file" multiple={true} />
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center gap-2 ">
                    <Button variant="primary" type="button" onClick={handleClickAdd}>
                        저장
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default AddComponent;