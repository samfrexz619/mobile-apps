import { View, Text, FlatList } from 'react-native'
import React from 'react'


interface TrendingProps {
  posts: Posts[];
}

const Trending: React.FC<TrendingProps> = (props) => {
  const { posts } = props
  return (
    <FlatList
      data={posts}
      renderItem={({ }) => (
        <View>
          <Text></Text>
        </View>
      )}
      horizontal
    />
  )
}

export default Trending