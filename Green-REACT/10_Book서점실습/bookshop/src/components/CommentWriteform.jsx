import { useContext, useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import DataContext from "../context/DataContext";

const CommentWriteform = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // 작성완료 버튼을 누르면, input값을 가져오는 이벤트 함수
    // 값을 넣어주고 창이 닫혀야한다
    const [text, setText] = useState("");
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
            img: null, // 기능 확인 후 넣기로
        };
        console.log(nextComment);
        data.action.setComments([...data.state.comments, nextComment]);
        data.action.setId(data.state.id + 1);
        setShow(false); // 모달창 종료
    };

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
                        <Form.Control type="file" />
                    </Form.Group>
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
