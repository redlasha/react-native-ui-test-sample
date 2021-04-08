import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Greeting from "./Greeting";

const Profile = ({ userName, name }) => {
    const [msg, setMsg] = useState("Select your status");

    return (
        <View style={styles.container}>
            <Text style={styles.textBox}>
                {userName}({name})
            </Text>
            <Text
                accessible={true}
                accessibilityLabel='textMsg'
                style={styles.textBox}>{msg}</Text>
            <Greeting
                testId='byeBtn'
                title="Bye!" onPress={() => setMsg("Seeya!")} />
            <Greeting
                testId='helloBtn'
                title="Hello!" onPress={() => setMsg("Welcome!")} />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    textBox: {
        marginBottom: 15,
    },
});