import React from "react";
import {
  Brand,
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  Input,
  Title,
} from "./styles";

import logo from "@assets/logo.png";
import { KeyboardAvoidingView, Platform } from "react-native";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={logo} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
