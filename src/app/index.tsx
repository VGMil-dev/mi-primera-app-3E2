import Header from "@/components/Header";
import Post from "@/components/Post";
import { ScrollView, StyleSheet } from "react-native";


export default function Index() {
  return (
    <ScrollView className="bg-red-300 flex h-full w-full">
      <Header></Header>
      <Post username="christian_tpx"></Post>
      <Post username="christian_tpx"></Post>
      <Post username="christian_tpx"></Post>
      <Post username="its_jmatu"></Post>
      <Post username="danii._ps"></Post>
      <Post username="formula_arcana3"></Post>
      <Post username="priv_maripazz"></Post>
      <Post username="pameferrr"></Post>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
