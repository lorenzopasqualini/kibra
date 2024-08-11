import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '@/lib/supabase';
import ImageItem from '@/components/Image';
import { Ionicons } from '@expo/vector-icons';

export default function Upload() {
  const [image, setImage] = useState<string | null>(null);
  const [files, setFiles] = useState<FileObject[]>([])

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async () => {
    const { data } = await supabase.storage.from('images').list();
    console.log(data);
    if (data) {
      setFiles(data)
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      exif: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {files.map((item) => (
          <ImageItem
            key={item.id}
            item={item}
          />
        ))}
      </ScrollView>

      <TouchableOpacity onPress={pickImage}>
        <Ionicons name="camera-outline" size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});