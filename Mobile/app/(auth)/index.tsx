import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const indexPage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity>
        <Link href={"(auth)/login"}>
          <Text>Login</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={"(auth)/register"}>
          <Text>Register</Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default indexPage;
