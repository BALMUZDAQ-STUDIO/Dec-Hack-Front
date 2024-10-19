import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {FlatList, Image, RefreshControl, ScrollView, Text, View} from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";
import BigCourse from "../../components/BigCourse";
import CourseCard from "../../components/CourseCard";
import {useGlobalContext} from "../../context/GlobalProvider";
const Home = () => {




  const {courses} = useGlobalContext()

  const courses2=[
      {
          progress: 0.9,
          title: "Data Scientist",
          grade: "4.8",
          users: "350",
          id: 4,
          image: images.datascientist,
          description: "A Data Scientist is an expert in analyzing and interpreting complex data to help organizations make better decisions. They use advanced techniques in statistics, machine learning, and data visualization to discover patterns and insights from data."
      },
      {
          progress: 0.7,
          title: "DevOps Engineer",
          grade: "4.5",
          users: "215",
          id: 5,
          image: images.devops,
          description: "A DevOps Engineer works at the intersection of development and operations, ensuring smooth and automated processes for software development and deployment. They focus on improving collaboration, efficiency, and delivery through tools and practices like continuous integration and continuous deployment (CI/CD)."
      },
      {
          progress: 0.8,
          title: "Product Manager",
          grade: "4.6",
          users: "482",
          id: 6,
          image: images.productmanager,
          description: "A Product Manager is responsible for overseeing the development and success of a product from inception to launch. They work closely with various teams to ensure that the product meets customer needs and business goals, aligning strategy, design, and execution."
      }
  ]

    const courses3 =[
        {
            progress: 0.7,
            title: "Full Stack Developer",
            grade: "4.3",
            users: "670",
            id: 7,
            image: images.fullstack,
            description: "A Full Stack Developer is proficient in both frontend and backend development, allowing them to build complete web applications from scratch. They work on everything from user interfaces to server-side logic and databases."
        },
        {
            progress: 0.5,
            title: "Mobile App Developer",
            grade: "4.2",
            users: "315",
            id: 8,
            image: images.mobileapp,
            description: "A Mobile App Developer specializes in creating applications for mobile devices, such as smartphones and tablets. They are skilled in platforms like iOS and Android, and focus on delivering smooth, efficient, and user-friendly mobile experiences."
        },
        {
            progress: 0.6,
            title: "Cloud Architect",
            grade: "4.9",
            users: "190",
            id: 9,
            image: images.cloudarchitect,
            description: "A Cloud Architect is responsible for designing and managing cloud computing systems for organizations. They develop cloud solutions that are scalable, secure, and cost-effective, enabling businesses to store, manage, and process data over the cloud."
        }
    ]

    // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
      <SafeAreaView className="bg-white h-[92vh]">
        <ScrollView>
        <View className="flex my-6 px-0 items-center ">
            <SearchInput />
        </View>
            <Text className="text-black text-[24px] font-bold mb-5 ml-4">
                Your Last Course
            </Text>
        <BigCourse title={"UX/UI Designer"} progress={0.8} id={1} image={images.uiux}/>


            <View className="ml-4 mt-4">
                <Text className="text-black text-[20px] font-bold mb-5">
                    For You
                </Text>
            </View>
      <FlatList
          horizontal={true}
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <CourseCard title={item.title} users={item.users} grade={item.grade} id={item.id} image={item.image}/>
        )}
          showsHorizontalScrollIndicator={false}


      />
            <View className="ml-4 mt-4">
                <Text className="text-black text-[20px] font-bold mb-5">
                    Popular
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={courses2}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <CourseCard title={item.title} users={item.users} grade={item.grade} id={item.id} image={item.image}/>

                )}
                showsHorizontalScrollIndicator={false}

            />
            <View className="ml-4 mt-4">
                <Text className="text-black text-[20px] font-bold mb-5">
                    Recently Opened
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={courses3}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <CourseCard title={item.title} users={item.users} grade={item.grade} id={item.id} image={item.image}/>
                )}
                showsHorizontalScrollIndicator={false}

            />
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
