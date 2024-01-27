import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import Cast from "../components/cast";
import MovieList from "../components/movieList";

import { styles, theme } from "../theme";

const ios = Platform.OS == "ios";

const topMargin = ios ? "" : " mt-3";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [isFavourite, toggleFavourite] = useState(false);

  let movieName = "Ant-Man and the Wasp : Quantumania";

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 " +
            topMargin
          }
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            // source={require('../assets/images/moviePoster2.png')}
            // source={{uri: image500(movie.poster_path) || fallbackMoviePoster}}
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-widest">
          movieName
        </Text>

        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released * 2020 * 170 min
        </Text>

        <Text className="text-neutral-400 font-semibold text-base text-center">
          Action *
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Thrill *
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Comedy *
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Description nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
        </Text>
      </View>

      <Cast cast={cast} navigation={navigation} />

      <MovieList
        title={"Similar Movies"}
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
}
