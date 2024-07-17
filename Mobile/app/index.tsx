import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View } from "react-native";

import { User } from "@/utils/types/UserType";
import api from "@/utils/api";

const index = () => {
  const [redirect, setRedirect] = useState<{
    status: boolean;
    where: "(auth)" | "(home)";
  }>({
    status: false,
    where: "(auth)",
  });

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await api.get("/user");

      if (response.status === 200) {
        setUser(response.data);
        setRedirect({
          status: true,
          where: "(home)",
        });
      } else {
        setRedirect({
          status: true,
          where: "(auth)",
        });
      }
    } catch (error) {
      setRedirect({
        status: true,
        where: "(auth)",
      });
    }
  };

  if (redirect.status) {
    return <Redirect href={redirect.where} />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <ActivityIndicator size={30} color={"black"} />
      </View>
    </SafeAreaView>
  );
};

export default index;
