import Box from './../components/Box.js'

function Enroll() {

    // 아래 내용들 state에 JSON 담아서 바인딩 하는 방식으로 수정할 것
    return (
        <div>
            <h2>수강꾸러미</h2>
            <table>
                <thead>
                    <tr>
                        <th>과목코드</th>
                        <th>과목명</th>
                        <th>담당교수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CD0001-01</td>
                        <td>운영체제</td>
                        <td>김길산</td>
                    </tr>
                    <tr>
                        <td>CD0002-02</td>
                        <td>딥러닝</td>
                        <td>홍길동</td>
                    </tr>
                    <tr>
                        <td>CD0003-03</td>
                        <td>자료구조</td>
                        <td>이영관</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Enroll