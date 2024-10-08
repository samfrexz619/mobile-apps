import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { images } from '../constants';
import CustomBtn from '../components/CustomBtn';
import { useGlobalContext } from '../context/GlobalContext';


export default function App() {

  const { isLoggedIn, loading } = useGlobalContext();

  if (!loading && isLoggedIn) {
    return (
      <Redirect href='/home' />
    )
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='min-h-[85vh] flex items-center w-full justify-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] h-[298px] w-full'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless{"\n"} Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              className='max-w-[136px] h-[15px] absolute -bottom-2 -right-8 w-full'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

          <CustomBtn
            containerStyles={styles.containerStyles}
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    width: '100%',
    marginTop: 28
  }
})
