import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';


const Home = () => {

  const { data: posts, loading, refresh } = useAppwrite(getAllPosts)

  // console.log(posts)

  const [searchItem, setSearchItem] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const refreshHandler = async () => {
    setRefreshing(true)
    // recall posts -> if any new videos appeared
    await refresh()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  Taylor
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  resizeMode='contain'
                  className='w-9 h-10'
                />
              </View>
            </View>

            <SearchInput
              inputMode='search'
              keyboardType='default'
              placeholder='Search for a video topic'
              handleChangeText={(val) => setSearchItem(val)}
              value={searchItem}
            />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 mb -3 text-lg font-pregular'>
                Trending videos
              </Text>

              <Trending posts={[]} />
            </View>

          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos found!'
            subtitle='Be the first one to upload a video'
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
      />
    </SafeAreaView>
  )
}

export default Home