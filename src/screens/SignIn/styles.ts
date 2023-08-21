import styled, { css } from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #e03f50;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
})`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 23px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
})`
  padding: 16px;
  width: 311px;
  height: 56px;

  border-radius: 12px;
  border: 1px solid #d16470;
  margin-bottom: 16px;
`;

export const ForgotPassword = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-top: 16px;
`;

export const Brand = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
  `};
`;
