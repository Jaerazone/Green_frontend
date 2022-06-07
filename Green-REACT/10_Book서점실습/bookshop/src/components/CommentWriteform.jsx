// 모달창
import { useContext, useEffect, useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import DataContext from "../context/DataContext";

const CommentWriteform = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // 작성완료 버튼을 누르면, input값을 가져오는 이벤트 함수
    // 값을 넣어주고 창이 닫혀야한다
    const [text, setText] = useState("");
    const [files, setFiles] = useState(null);
    const data = useContext(DataContext);
    const onChange = (e) => {
        setText(e.target.value);
    };
    const addComment = () => {
        const nextComment = {
            id: data.state.id,
            user: data.state.user,
            text: text, // setText로 넣어준값 여기에 넣어주면됨!
            product: null, //props 값으로 받아와서 넣기
            img: URL.createObjectURL(files[0]), // 기능 확인 후 넣기로
        };
        console.log(nextComment);
        data.action.setComments([...data.state.comments, nextComment]);
        data.action.setId(data.state.id + 1);
        setShow(false); // 모달창 종료
    };

    const onLoadFile = (e) => {
        //이벤트 타겟의 밸류는 받아온적 있지만 file은 e.target.files 확인하면됨
        // console.log 이용해보자
        setFiles(e.target.files);
        console.log(e.target.files);
    };
    // 입력받은 파일 값을 출력하는 함수
    const preview = () => {
        // 이미지파일이 없으면 실행하지 않는다
        if (!files) return false;
        const img = document.querySelector("#img_box");
        img.style.backgroundImage = `url(${URL.createObjectURL(files[0])})`;
    };
    // files이 바뀔때마다 preview 함수 실행하도록함
    useEffect(() => {
        preview();
        // return 이 실행될때 preview() 함수 실행
        // effect 이후 어떻게 정리할것인지 (clean-up 함수)
        // 파일이 없을때 return false 값을 넘겨주도록함
        return () => preview();
    });

    return (
        <>
            <Button className="mx-3" variant="dark" onClick={handleShow}>
                후기 작성
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>후기를 작성해주세요</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Comments"
                    >
                        <Form.Control
                            onChange={onChange}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "150px" }}
                        />
                    </FloatingLabel>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>추가할 이미지를 선택하세요</Form.Label>
                        {/* 값이 들어오면 변경됨 onChange사용, 파일의 값 저장을 위함 */}
                        <Form.Control type="file" onChange={onLoadFile} />
                    </Form.Group>
                    {/* 이미지 미리모기 , 자바스크립트의 DOM을가져와 사용해보기로함*/}
                    <div
                        id="img_box"
                        style={{
                            width: "100px",
                            height: "50px",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="dark" onClick={addComment}>
                        작성완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentWriteform;
