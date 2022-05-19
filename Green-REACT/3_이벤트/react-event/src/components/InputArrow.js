import { useState } from 'react';

const InputArrow = () => {
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        user : '',
        message : '',
    });
    //익명함수, 화살표함수 동일하게 사용
    const inputChange = function(e) {
        setMessage(e.target.value)
    };
    const formChange= (e) => {
        // 스프레드 연산자를 사용해서 form안의 값을 꺼내서 사용
        // 동일한 키값은 가장 마지막에 작성된 갑으로 대체
        const nextForm = ({
            ...form,
            [e.target.name] : e.target.value,
        })
        setForm(nextForm)
    }
    return (
        <div>
            <h1>{message}</h1>
            <input type="text" onChange={inputChange} />
            <h2>{form.user}의 메시지 : {form.message}</h2>
            <input type="text" name="user" onChange={formChange} />
            <input type="text" name="message" onChange={formChange} />
            
        </div>
    );
};

export default InputArrow;