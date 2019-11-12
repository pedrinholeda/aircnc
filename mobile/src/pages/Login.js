import React from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import logo from "../assets/logo.png";

export default function Login() {
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL*</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address" //abri teclado com configuraçao para email
          autoCapitalize="none" //nao deixar letras em caixa alta
          autoCorrect={false}
        />
        <Text style={styles.label}>TECNOLOGIA*</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words" //nao deixar letras em caixa alta
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo tamanho da tela
    justifyContent: "center", // alinhar o conteudo verticalmente ao centro
    alignItems: "center" // alinhar o conteudo horizontalmente ao centro
  },
  form: {
    alignSelf: "stretch", //ocupar a largura inteira possivel
    paddingHorizontal: 30,
    marginTop: 30
  },
  label: {
    fontWeight: "bold", //negrito
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
