import React from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from 'react-native';

import { useRouter } from 'expo-router';

import useFetch from '../../services/useFetch';
import { fetchMovies } from '../../services/api';

import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';

const Search = () => {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: movieError,
    } = useFetch(fetchMovies);
    return (
        <View className="flex-1 bg-primary">
            <FlatList
                data={movies || []}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
                className="px-5"
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                ListHeaderComponent={
                    <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                            <Text className="text-white text-2xl font-bold">
                                Movie App
                            </Text>
                        </View>

                        <View className="my-5">
                            <SearchBar />
                        </View>

                        {moviesLoading && (
                            <ActivityIndicator
                                size="large"
                                color="#0000ff"
                                className="my-3"
                            />
                        )}

                        {movieError && (
                            <Text className="text-red-500 px-5 my-3">
                                Error: {movieError.message}
                            </Text>
                        )}

                        {!moviesLoading &&
                            !movieError &&
                            movies?.length > 0 && (
                                <Text className="text-white px-5">
                                    Search Results
                                </Text>
                            )}
                    </>
                }
            />
        </View>
    );
};

export default Search;