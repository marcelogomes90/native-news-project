import { FlatList, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/processes/news";
import { useCallback } from "react";
import { NewsData } from "@/interfaces/news";
import noImage from "@/assets/images/noimage.png";

export default function HomeScreen() {
  const {
    data: newsList,
    error,
    isLoading,
  } = useQuery({
    queryFn: fetchNews,
    queryKey: ["news", { qtd: 5 }],
  });

  const renderImage = useCallback((item: { imagens: string }) => {
    const image = item?.imagens
      ? `https://agenciadenoticias.ibge.gov.br/${JSON.parse(item?.imagens)?.image_intro}`
      : noImage;

    return image;
  }, []);

  const renderItem = useCallback(
    (item: NewsData) => (
      <ThemedView style={styles.newsContainer}>
        <Image source={{ uri: renderImage(item) }} style={styles.newsImage} />
        <ThemedText style={styles.newsTitle}>{item.titulo}</ThemedText>
      </ThemedView>
    ),
    [renderImage],
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Notícias IBGE</ThemedText>
      </ThemedView>

      <FlatList
        data={newsList?.items}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    justifyContent: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  newsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
    alignItems: "center",
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
  },
  newsImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
});
