import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, Redirect } from "expo-router";
import { useState } from "react";

import api from "@/utils/api";

const loginPage = () => {
  const headerHeigh = useHeaderHeight();

  const [redirect, setRedirect] = useState<boolean>(false);

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");

  const submitLogin = async () => {
    const response = await api.post("/login", {
      email: loginEmail,
      password: loginPass,
    });

    if (response.status === 200) {
      setRedirect(true);
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  if (redirect) {
    return <Redirect href={""} />;
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: headerHeigh,
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headingTxt}>Login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            onChangeText={setLoginEmail}
            value={loginEmail}
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Pass"
            onChangeText={setLoginPass}
            value={loginPass}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={() => submitLogin()}
          style={styles.loginButton}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"(auth)/register"}>
            <Text>Register</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default loginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headingTxt: {
    marginVertical: 10,
    fontSize: 28,
    fontWeight: "800",
    color: "black",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    marginVertical: 2,
    gap: 4,
  },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  loginButton: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#0D6EFD",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
  },
});
