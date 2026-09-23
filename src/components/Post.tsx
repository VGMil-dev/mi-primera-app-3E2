import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface PostProps{
    username?:string
}

const Post = ({username}:PostProps) => {

  const [isLiked, setisLiked] = useState(false);

  return (
    <View className='flex w-full h-[420px] bg-white p-4 my-4 '>
      {/* Header-POST */}
    <View className='flex-row items-center gap-2'>
        <View className='rounded-full bg-gray-400 w-[30px] h-[30px]'/>
        <Text>{username!=null? username :"BichoTest"}</Text>
    </View>
    {/* Header-POST */}

    {/* Content-Post */}
    <View className='flex w-full h-4/5 bg-gray-200 mt-2'></View>
    {/* Content-Post */}
    <View className='flex-row gap-4 w-full  bg-gray-200 mt-2'>
        <TouchableOpacity 
          
          onPress={()=>{setisLiked(!isLiked)}}
        >
          <Text className='text-[30px]'>{isLiked?"❤️":"🤍"}</Text>
        </TouchableOpacity>
        <Text className='text-[30px]'>🗨️</Text>
        <Text className='text-[30px]'>📤</Text>
    </View>
    </View>
  )
}

export default Post