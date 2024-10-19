import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";
import {LogoIcon} from "../constants/svg_icons";
import {useEffect} from "react";
const Welcome = () => {
  const { loading, isLogged, setCourses } = useGlobalContext();
  useEffect(() => {
    setCourses([{progress:0.8, title: "UX/UI Designer", grade:"4.7", users:"271", id:1, image:images.uiux, description:"A UX/UI designer is a professional who specializes in the design of digital products, focusing on both user experience (UX) and user interface (UI). Their role is to create interfaces that are intuitive, visually appealing, and user-friendly, ensuring that users can interact smoothly with websites, apps, or software."}, {progress:0.6,title: "Frontend Developer", grade:"4.1", users:"571", id:2, image:images.frontend, description: "A Frontend Developer is a specialist in building the user-facing part of websites and web applications. They work with technologies like HTML, CSS, and JavaScript to create interactive, responsive, and visually appealing interfaces. Their role involves ensuring that users can easily navigate and interact with digital products across different devices and platforms, while maintaining performance and accessibility standards."},{progress:0.4,title: "Backend Developer", grade:"5", users:"127", id:3, image: images.backend, description: "A Backend Developer is responsible for the server-side logic, databases, and overall architecture of web applications. They work with programming languages such as Python, Java, or Node.js to build APIs, manage data storage, and ensure smooth communication between the frontend and the server. Their focus is on creating efficient, secure, and scalable systems that support the functionality of web or mobile applications."}])
  }, []);
  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full justify-center items-center">
      <Loader isLoading={loading} />

      <LogoIcon/>
        <Text className="text-black text-[32px] font-extrabold mt-4">
            Welcome to
        </Text>
        <Text className="text-main text-[32px] font-extrabold">

        CourseFusion
        </Text>

        <Text className="text-[#9A9A9A] text-[20px] font-extrabold mt-6">
            Create, Learn, Enjoy
        </Text>
        <View className="h-20"></View>

        <CustomButton title="Log in" handlePress={() => router.push("/sign-in")}/>
        <View className="h-6"></View>
        <CustomButton title="Sing up" handlePress={() => router.push("/sign-up")}/>


        <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
