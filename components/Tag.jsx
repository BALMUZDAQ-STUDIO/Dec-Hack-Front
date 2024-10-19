import {TouchableOpacity,Text} from "react-native";

const Tag = ({title, color, handleClick}) => {
    return (
        <TouchableOpacity className="justify-center items-center rounded-[20px] mr-2" style={{backgroundColor:color}} onPress={handleClick}>
            <Text className="text-white font-bold text-[12px] py-[8px] px-[24px]">
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default Tag
