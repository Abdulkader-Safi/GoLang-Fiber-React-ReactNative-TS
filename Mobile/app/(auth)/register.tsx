import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import api from "@/utils/api";

const registerPage = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [registerName, setRegisterName] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");

  const HandleRegister = async () => {
    const response = await api.post("/register", {
      name: registerName,
      email: registerEmail,
      password: registerPass,
    });

    if (response.status === 200) {
      setRedirect(true);
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  if (redirect) {
    return <Redirect href={"/"} />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headingTxt}>Create An Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="User Name"
            onChangeText={setRegisterName}
            value={registerName}
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            onChangeText={setRegisterEmail}
            value={registerEmail}
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Pass"
            onChangeText={setRegisterPass}
            value={registerPass}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={HandleRegister}
          style={styles.registerButton}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"(auth)/login"}>
            <Text>Login</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default registerPage;

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
  registerButton: {
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
