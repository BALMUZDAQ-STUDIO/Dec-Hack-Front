import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Image, FlatList, TouchableOpacity, Text, ScrollView, Switch} from "react-native";
import {useState} from "react";
import {icons, images} from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import {CustomButton, EmptyState, InfoBox, VideoCard} from "../../components";
import {ArrowIcon, LanguageIcon, MoreIcon, TermsIcon} from "../../constants/svg_icons";

const Settings = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

    const [darkTheme, setDarkTheme] = useState(false);
    const [noti, setNoti] = useState(false);
    const [sound, setSound] = useState(false);
    const [vibration, setVibration] = useState(false);
    const toggleSwitch = (func) => () => func(previousState => !previousState);

    const logout = async () => {
    router.replace("/");
    await signOut();
    console.log(222)
    setUser(null);
    setIsLogged(false);


  };

  return (
      <SafeAreaView className="bg-white h-[92vh]">
        <ScrollView>
      <View className="mx-[32px]">
          <Text className="text-black text-[24px] font-bold mb-[24px]">
              Profile
          </Text>
          <View className="flex flex-row mb-[16px]">
              <Image source={images.user}/>
              <View className="ml-[24px]">
                  <Text className="text-main text-[20px] font-bold mb-[20px]">
                      GogaMayor
                  </Text>
                  <Text className="text-[#9A9A9A] text-[16px] font-bold">
                      Learning: UX/UI Designer
                  </Text>
              </View>
          </View>
          <CustomButton containerStyles="w-full h-[48px]" title="Edit Profile"/>
      </View>
            <View className="mx-[32px] mt-[32px]">
                <Text className="text-black text-[24px] font-bold mb-[24px]">
                    Appearance
                </Text>
                <View className="flex flex-row mb-[16px] items-center">
                    <Text className="text-[#9A9A9A] text-[16px] font-bold">
                        Mode
                    </Text>
                    <View className="flex flex-row items-center ml-[50vw]">
                        <Text className="mr-2 text-[16px] font-bold text-main">
                            Dark
                        </Text>
                        <Switch
                            onValueChange={toggleSwitch(setDarkTheme)}
                            value={darkTheme}
                            trackColor={{false: '#767577', true: "#474747"}}
                            thumbColor= '#fff'
                            />

                    </View>
                </View>
            </View>
            <View className="mx-[32px] mt-[32px]">
                <Text className="text-black text-[24px] font-bold mb-[24px]">
                    Language
                </Text>
                <Text className="text-main font-bold text-[20px] mb-[16px]">
                    English(US)
                </Text>
                <View className="flex flex-row mb-[16px] items-center">

                    <LanguageIcon/>
                    <Text className="text-[#9A9A9A] text-[16px] font-bold ml-[16px] mr-[130px]">
                        Change Language
                    </Text>

                    <MoreIcon/>

                </View>

            </View>

            <View className="mx-[32px] mt-[32px]">
                <Text className="text-black text-[24px] font-bold mb-[24px]">
                    Privacy Policy
                </Text>

                <View className="flex flex-row mb-[16px] items-center">

                    <TermsIcon/>
                    <Text className="text-[#9A9A9A] text-[16px] font-bold ml-[16px] mr-[222px]">
                        Terms
                    </Text>
                    <ArrowIcon/>
                </View>


                <View className="flex flex-row mb-[16px] items-center">

                    <LanguageIcon/>
                    <Text className="text-[#9A9A9A] text-[16px] font-bold ml-[16px] mr-[158px]">
                        Privacy Notice
                    </Text>
                    <ArrowIcon/>
                </View>

            </View>

            <View className="mx-[32px] mt-[32px]">
                <Text className="text-black text-[24px] font-bold mb-[24px]">
                    Notification
                </Text>

                <View className="flex flex-row mb-[16px] items-center">
                    <Text className="text-[#9A9A9A] text-[16px] font-bold">
                        Show notifications
                    </Text>
                    <View className="flex flex-row items-center ml-[35vw]">
                        <Switch
                            onValueChange={toggleSwitch(setNoti)}
                            value={noti}
                            trackColor={{false: '#767577', true: "#45A5FF"}}
                            thumbColor= '#fff'
                        />

                    </View>
                </View>
                <View className="flex flex-row mb-[16px] items-center">
                    <Text className="text-[#9A9A9A] text-[16px] font-bold">
                        Allow sound
                    </Text>
                    <View className="flex flex-row items-center ml-[48vw]">
                        <Switch
                            onValueChange={toggleSwitch(setSound)}
                            value={sound}
                            trackColor={{false: '#767577', true: "#45A5FF"}}
                            thumbColor= '#fff'
                        />

                    </View>
                </View>
                <View className="flex flex-row mb-[16px] items-center">
                    <Text className="text-[#9A9A9A] text-[16px] font-bold">
                        Allow vibration
                    </Text>
                    <View className="flex flex-row items-center ml-[43vw]">
                        <Switch
                            onValueChange={toggleSwitch(setVibration)}
                            value={vibration}
                            trackColor={{false: '#767577', true: "#45A5FF"}}
                            thumbColor= '#fff'
                        />

                    </View>
                </View>

            </View>
            <View className="items-center justify-center mt-3">
            <CustomButton title="Log Out" containerStyles="bg-[#FF2C2C]" handlePress={logout}/>
            </View>

        </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
