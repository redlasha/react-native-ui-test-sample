import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Greeting from "../src/Greeting";

describe.skip("[Greeting] Test", () => {
    const onPressMock = jest.fn();
    const props = {
        title: "Hello!",
        onPress: onPressMock,
    };

    test("버튼이 눌린다.", () => {
        const rendered = render(<Greeting {...props} />);

        for (let i = 0; i < 5; i++) {
            fireEvent(rendered.getByText("Hello!"), "onPress");
        }
        expect(onPressMock).toBeCalledTimes(5);
        expect(rendered.toJSON().children[0].children[0].children[0]).toEqual(
            "Hello!",
        );
    });
});

/**
 *  Variant
        getBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 없다면 테스트 실패로 처리한다.
        getAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 없다면 테스트 실패로 처리한다.
        queryBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 존재하지 않아도 실패는 하지 않는다.
        queryAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 존재하지 않아도 실패는 하지 않는다.
        findBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 단 Promise 객체를 리턴하며 조건에 만족하는 엘리먼트가 나타날 때 까지 기다리고 만약 4500ms 내에 발견되지 않으면 테스트는 실패한다.
        findAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 단 Promise 객체를 리턴하며 조건에 만족하는 엘리먼트가 나타날 때 까지 기다리고 만약 4500ms 내에 발견되지 않으면 테스트는 실패한다.
    Queries( 주로 사용하는 것만 다룸 )
        ByText : 엘리먼트가 가진 텍스트 값으로 선택
        ByAltText : 엘리먼트가 가진 alt 속성으로 선택
        ByTestId : 엘리먼트가 가진 TestId 속성으로 선택
 */