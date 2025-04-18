import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-xl ">Hi Started building MotionHub</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/pk">movies</Link>
    </View>
  );
}
