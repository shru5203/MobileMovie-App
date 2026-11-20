import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { icons } from "../2025-03 React Native Movie App/React Native Movie App (assets)/constants/icons";

const SearchBar = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#221F3D',
                borderRadius: 30,
                paddingHorizontal: 15,
                paddingVertical: 12,
            }}
        >
            <Image
                source={icons.search}
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                }}
                resizeMode="contain"
            />

            <TextInput
                placeholder="Search movies..."
                placeholderTextColor="#A8B5DB"
                style={{
                    flex: 1,
                    color: 'white',
                }}
            />
        </View>
    );
};

export default SearchBar;