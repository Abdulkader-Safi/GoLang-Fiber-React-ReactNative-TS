import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Index */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      {/* Auth */}
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />

      {/* Home */}
      <Stack.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
