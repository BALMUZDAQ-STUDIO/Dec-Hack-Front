import {FlatList, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LastCourse from "../../components/BigCourse";
import BigCourse from "../../components/BigCourse";
import {images} from "../../constants";
import {useGlobalContext} from "../../context/GlobalProvider";

const Courses = () => {

    const {courses} = useGlobalContext()


    return (
        <SafeAreaView className="bg-white h-[92vh]">
      <FlatList data={courses}
                keyExtractor={(item) => item.title}
                renderItem={
                    ({item}) => (
                        <>
                        <BigCourse title={item.title} progress={item.progress} id={item.id} image={item.image}/>
                        <View className="h-[48px]"></View>
                        </>
                    )
                }/>

    </SafeAreaView>
  );
};


export default Courses;
