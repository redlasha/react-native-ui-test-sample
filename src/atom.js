import {atom} from "recoil"

export const dataAtom = atom({
    key: 'data',
    default: {
        nickname: '홍길동',
        tel: '010-2222-3333'
    }
})