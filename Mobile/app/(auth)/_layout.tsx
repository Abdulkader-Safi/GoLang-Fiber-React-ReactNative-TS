import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="login" />
      <Tabs.Screen name="register" />
    </Tabs>
  );
};

export default AuthLayout;
