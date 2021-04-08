import React from "react";
import { Button } from "react-native";

// <Button 에서 accessibilityLabel가 적용되야 하는 것 같음.
const Greeting = ({ testId, title, onPress }) => {
    return <Button
        accessible={true}
        accessibilityLabel={testId}
        title={title}
        onPress={onPress} />
};

export default Greeting;