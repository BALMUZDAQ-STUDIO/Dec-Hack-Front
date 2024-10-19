import {ActivityIndicator, Image, Text, TouchableOpacity} from "react-native";
import images from "../constants/images";

const GoogleButton = ({
                          handlePress,
                          isLoading,
                      }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-black w-[320px] rounded-[45px] h-16 flex flex-row  items-center ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <Image source={images.google} className="mx-8"/>
            <Text className="text-white font-bold text-lg">
                Log in with Google
            </Text>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
};

export default GoogleButton;
