import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabAbout() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>
          Este aplicativo é dedicado a fornecer as últimas notícias e
          informações estatísticas do Instituto Brasileiro de Geografia e
          Estatística (IBGE). Nosso objetivo é manter você atualizado com dados
          precisos e relevantes sobre diversos aspectos sociais, econômicos e
          demográficos do Brasil. Desenvolvido com tecnologia React Native,
          nosso app oferece uma experiência de usuário intuitiva e eficiente,
          acessível em qualquer dispositivo móvel.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
