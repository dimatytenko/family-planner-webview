import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ios}>
        <WebView source={{ uri: "https://family-planner-x.netlify.app" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ios: {
    flex: 1,
    paddingTop: 40,
  },
});
