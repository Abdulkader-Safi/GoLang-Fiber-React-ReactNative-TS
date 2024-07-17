import api from "@/utils/api";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Stack } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const indexPage = () => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const logout = async () => {
    const response = await api.post("/logout");
    if (response.status === 200) {
      alert("logout successfully");

      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect href={""} />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Home",
          headerRight: () => (
            <TouchableOpacity
              onPress={logout}
              style={{
                marginRight: 20,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="log-out-outline" size={30} color={"#000"} />
            </TouchableOpacity>
          ),
        }}
      />

      <SafeAreaView>
        <Text>indexPage</Text>
      </SafeAreaView>
    </>
  );
};

export default indexPage;
