import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
} from "react-native";

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: '1', text: "Привет! Как я могу вам помочь?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");

    const sendMessage = () => {
        if (inputText.trim()) {
            const newMessage = {
                id: Date.now().toString(),
                text: inputText,
                sender: "user",
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText("");

            // Симуляция ответа бота
            setTimeout(() => {
                const botReply = {
                    id: Date.now().toString(),
                    text: "Белок (или протеин) — это крупная органическая молекула, состоящая из аминокислот, соединённых между собой в длинные цепочки. Белки играют ключевую роль во всех живых организмах и выполняют множество жизненно важных функций. Они состоят из углерода, водорода, кислорода, азота и иногда серы.",
                    sender: "bot",
                };
                setMessages((prevMessages) => [...prevMessages, botReply]);
            }, 3000);
        }
    };

    const renderMessage = ({ item }) => (
        <View
            style={[
                styles.messageContainer,
                item.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
        >
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderMessage}
                style={styles.chatContainer}
                contentContainerStyle={{ paddingVertical: 10 }}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chatContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    messageContainer: {
        maxWidth: "70%",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#DCF8C6",
    },
    botMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#E5E5EA",
    },
    messageText: {
        fontSize: 16,
        color: "#000",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: "#F2F2F2",
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: "#007AFF",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    sendButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
