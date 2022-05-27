import './App.css';

//부트스트랩 사용시 관련 컴포넌트불러와서 사용
// "react-bootstrap" 에서 불러오기
import { Button, Col, Row, Container} from 'react-bootstrap';
//fontAwesome을 사용하기 위해 추가  > 공식 홈페이지 참고
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 바벨 매크로를 이용해서 가져오는 방법 babel.config.js를 .babelrc로 바꾸기
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
//fontAwesome에 직접 접근해서 값 들고오기
import {faCamera} from  '@fortawesome/free-solid-svg-icons' 
import TestComp from './components/TestComp';

import StyleComp from './components/StyleComp'

function App() {
  const gridStyle = {
    background:'lightyellow',
  }
  return (
    <div className="App">

        <Button variant="primary" onClick={()=>{alert('눌렀습니다')}}>Primary</Button>
        <Container style={gridStyle}>
          <Row>
            <Col sm={8} md={4}>
              {/* 매크로통해 가져올때 */}
            <FontAwesomeIcon icon={faCamera} />
            <FontAwesomeIcon icon={solid("Camera")} />
            <FontAwesomeIcon icon={solid("user-secret")} />
            <FontAwesomeIcon icon={regular("calendar-days")} />
            <FontAwesomeIcon icon={brands("airbnb")} />
            <FontAwesomeIcon icon={brands("asymmetrik")} />
            
            </Col>

            <Col sm={8} md={2}>2</Col>
          </Row>
          <Row>
            <Col>
            <TestComp>값을 넣었습니다</TestComp>
            <TestComp 
              size="large pink" 
              // onClick 클릭 값이 props로 전송됨
              onClick={()=>{alert('눌렀습니다')}} >버튼을 눌러주세요</TestComp>
            
            <button className='MyButton'>버튼</button>
            {/* test.scss 파일이 전역으로 되어있어서 전부다 적용됨 */}

            <h1>💛styled-components 연습</h1>
            <StyleComp primary></StyleComp>

            </Col>
          </Row>

          

        </Container>
    </div>
  );
}

export default App;