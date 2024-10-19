import {Text, TouchableOpacity, View, Image} from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import {router, usePathname} from "expo-router";
import React from "react";
import {useEffect} from "react";
import {useGlobalContext} from "../context/GlobalProvider";


const BigCourse = ({image, title, progress, id}) => {
    const pathname = usePathname();
    const {setCourse, courses} = useGlobalContext()

    const submit = () => {
        if (pathname.startsWith("/course_tab")) {
            setCourse(courses[id-1])
            router.setParams({id})
        } else {
            setCourse(courses[id-1])
            router.push(`/course_tab/${id}`)
        }
    }

    return (
        <TouchableOpacity className="mx-5" onPress={submit}
                          activeOpacity={0.7}>
            <Image source={image} className="w-full h-[240px] rounded-[15px]" />
            <Text className="text-black text-[24px] font-bold  mt-[8px]">
                {title}
            </Text>
            <Text className="text-[#9A9A9A] text-[12px] font-semibold mb-[11px] mt-[8px]">
                progress {progress*100}%
            </Text>
            <ProgressBar progress={progress} width={360} height={16}  borderRadius={12} style={{backgroundColor: "#A8D5FE", borderColor:"white"}}/>
        </TouchableOpacity>
    )
}
export default BigCourse
