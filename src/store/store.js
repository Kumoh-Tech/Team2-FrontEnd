import create from 'zustand'

const useStore = create(() => ({

    // 유저 정보 (로그인 시 유효)
    user: {
        isLoggedIn: false,
        userInfo: null,
        token: null
    }
    // 로그인, 로그아웃 메서드 구현 예정

}))

export default useStore