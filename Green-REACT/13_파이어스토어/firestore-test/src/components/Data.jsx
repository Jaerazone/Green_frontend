import React from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../database/firebase";
import { useState } from "react";

const Data = () => {
    const [docData, setDocData] = useState([]);
    let array = [];

    // 클릭했을때 값을 가져오기 위한 함수
    // await만쓰면 비동기임을 모르기때문에 함수에 async를 꼭 써줘야함
    const getData = async () => {
        // getDocs를 이용해서 값을 가져오고 내용을 출력함
        const querySnapshot = await getDocs(collection(db, "user"));
        // 자료형 확인
        console.log(typeof querySnapshot);
        // 객체 내용 확인
        console.dir(querySnapshot);

        querySnapshot.forEach((doc) => {
            // quefySnapshot로 문서들을 가져오고 각각의 문서는 doc으로 확인
            console.log(`${doc.id} => ${doc.data().last}`);
            array.push({ last: doc.data().last, first: doc.data().first });
        });
        setDocData(array);
    };

    const addData = async () => {
        try {
            const docRef = await addDoc(collection(db, "user"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <h1>파이어베이스에서 값을 가져와서 출력하고 있습니다</h1>
            <p>콘솔을 확인해주세요</p>
            <button onClick={getData}>버튼을 눌러서 값을 가져오세요</button>
            <button onClick={addData}>버튼을 눌러서 값을 추가하세요</button>
            {docData.map((data, index) => (
                <div key={index}>{data.last}</div>
            ))}
        </div>
    );
};

export default Data;
