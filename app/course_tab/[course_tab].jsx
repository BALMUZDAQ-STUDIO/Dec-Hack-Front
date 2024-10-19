import {Link, router, useLocalSearchParams, usePathname} from "expo-router";
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../../context/GlobalProvider";
import useAppwrite from "../../lib/useAppwrite";
import ProgressBar from 'react-native-progress/Bar';
import {icons} from "../../constants";
import CustomButton from "../../components/CustomButton";
import BigCourse from "../../components/BigCourse";
import {BackIcon, Star1Icon} from "../../constants/svg_icons";
import {useEffect} from "react";

const Course_tab = () => {
    const pathname = usePathname();

    const {course} = useGlobalContext()

    return (
         <SafeAreaView className=" h-[100vh] bg-white items-center ">
            <ScrollView className="ml-4 mr-4 h-[100vh] overflow-hidden">
                <Link href={"/home"} className="mb-4">
                    <BackIcon/>
                </Link>

                <View className="">
                    <Image source={course.image} className="w-full h-[240px] rounded-[15px] bg-[#F2F2F2]"/>
                    <Text className="text-black text-[24px] font-bold  mt-[8px]">
                        {course.title}
                    </Text>
                    <Text className="text-[#9A9A9A] text-[12px] font-semibold mb-[11px] mt-[8px]">
                        progress {course.progress * 100}%
                    </Text>
                    <ProgressBar progress={course.progress} width={360} height={16} borderRadius={12}
                                 style={{backgroundColor: "#A8D5FE", borderColor: "white"}}/>
                </View>
                <Text className="text-[16px] font-bold mt-6">
                    {course.description}
                </Text>
                <View>
                    <Text className="text-[12px] font-bold mt-4 mb-2 text-[#9A9A9A]">Rate course</Text>
                    <View className="flex flex-row ">
                        <Star1Icon/>
                        <View className="w-2"></View>
                        <Star1Icon/>
                        <View className="w-2"></View>
                        <Star1Icon/>
                        <View className="w-2"></View>
                        <Star1Icon/>
                        <View className="w-2"></View>
                        <Star1Icon/>
                    </View>

                </View>
                <View className="mt-4">
                    <Text className="text-[24px] font-bold">Rating: <Text
                        className="text-[24px] font-bold text-[#5EE63F]">{course.grade}/5.0 <Text
                        className="text-[24px] font-bold text-[#CDCDCD]">({course.users})</Text></Text></Text>
                    <Text className="text-[24px] font-bold mt-4">Difficulty: <Text
                        className="text-[24px] font-bold text-[#C6C600]">{course.difficulty}/5.0</Text></Text>
                </View>
                <View className="items-center mt-10">
                    <CustomButton title="Start Course"/>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Course_tab;