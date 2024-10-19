import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import {StarIcon} from "../constants/svg_icons";
import {router, usePathname} from "expo-router";
import {useGlobalContext} from "../context/GlobalProvider";

const CourseCard = ({title, image, grade, users, id}) => {
    const pathname = usePathname();
    const {courses, setCourse} = useGlobalContext()
    return (
        <TouchableOpacity className="mx-3" onPress={() => {
            if (pathname.startsWith("/course_tab")) {
                setCourse(courses[id-1])
                router.setParams({id})
            } else {
                setCourse(courses[id-1])
                router.push(`/course_tab/${id}`)
            }
        }}
                          activeOpacity={0.7}>

            <Image source={image} className="w-[200px] h-[160px] rounded-[16px]"/>

            <Text className="font-bold text-[12px] mt-2">
                {title}
            </Text>
            <View className="flex items-center flex-row mt-2">
                <StarIcon/>
                <Text className="text-[10px] font-semibold">
                    {grade} ({users})
                </Text>
            </View>



        </TouchableOpacity>
    )
}
export default CourseCard
