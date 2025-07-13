import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Tabslayout() {
  return (
    // <Tabs screenOptions={{ tabBarShowLabel: false }}> -- to not have labels
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-sharp" size={size} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
