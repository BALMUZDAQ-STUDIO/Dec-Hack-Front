import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import GoogleButton from "../../components/GoogleButton";


const SignIn = () => {
  const { setUser, setIsLogged, setToken } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      /*
      setToken(await signIn(form.email, form.password))
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

       */

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">

        <View
          className="w-full flex justify-center items-center h-full px-4 my-6 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >

          <Text className="text-[32px] text-black mt-10 font-inter font-extrabold">
            LOGIN
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="Your email..."
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Your password..."
            otherStyles="mt-7"
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7 mb-[24px]"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center flex-row gap-2">
            <Link
                href="/sign-up"
                className="text-[10px] text-main font-bold mr-[160px]"
            >
              Forgot password?
            </Link>
            <Link
              href="/sign-up"
              className="text-[10px]  text-main mb-[28px] font-bold"
            >
              Sing up
            </Link>
          </View>

          <GoogleButton
              handlePress={submit}
              isLoading={isSubmitting}
          />
          <View className="h-40"></View>

        </View>

    </SafeAreaView>
  );
};

export default SignIn;
