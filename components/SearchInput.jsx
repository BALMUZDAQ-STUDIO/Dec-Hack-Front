import { useState } from "react";
import { router, usePathname } from "expo-router";
import {View, TouchableOpacity, Image, TextInput, Alert, FlatList} from "react-native";

import { icons } from "../constants";
import Tag from "./Tag";
import {SearchIcon} from "../constants/svg_icons";


const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  const tags = [{title: "Frontend", color:"#138DFF" }, {title: "UX/UI", color:"#D22067" }, {title: "AI", color:"#44CA85" }, {title: "Low level", color:"#720DA5" }]


  return (
<>
    <View className="flex flex-row items-center justify-center space-x-4 w-[376px] h-[48px] px-4 bg-[#F2F2F2] rounded-[40px]">
      <TextInput
        className="text-base flex-1 mb-2 font-inter font-bold text-[12px]"
        value={query}
        placeholder="Type something to search course..."
        placeholderTextColor="#CDCDCD"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <SearchIcon/>
      </TouchableOpacity>

    </View>
    <FlatList
        showsHorizontalScrollIndicator={false}
        className="mt-3"
        horizontal={true}
        data={tags}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
            <Tag
                title={item.title}
                color={item.color}
                handleClick={() => setQuery(item.title)}
            />
        )}
    />

    </>
  );
};

export default SearchInput;
