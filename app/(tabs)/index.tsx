import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { icons } from '../../2025-03 React Native Movie App/React Native Movie App (assets)/constants/icons';
import { images } from '../../2025-03 React Native Movie App/React Native Movie App (assets)/constants/images';

import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import { fetchMovies } from '../../services/api';

/* =========================
   CUSTOM HOOK (inside same file)
========================= */
const useFetch = (fetchFunction: () => Promise<any>) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            // If API returns { results: [...] } use this:
            setData(result?.results ?? result);

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData };
};

/* =========================
   SCREEN COMPONENT
========================= */
const Index = () => {
    const {
        data: movies,
        loading: moviesLoading,
        error: movieError,
    } = useFetch(fetchMovies);

    return (
        <View style={styles.container}>
            <Image
                source={images.bg}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                <Image
                    source={icons.logo}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={{ marginTop: 20, alignSelf: 'center' }}
                    />
                ) : movieError ? (
                    <Text style={styles.errorText}>
                        Error: {movieError?.message || 'Something went wrong'}
                    </Text>
                ) : (
                    <>
                        <View style={styles.searchContainer}>
                            <SearchBar />
                        </View>

                        <Text style={styles.heading}>Latest Movies</Text>

                        <FlatList
                            data={movies || []}
                            renderItem={({ item }) => (
                                <MovieCard movie={item} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={3}
                            scrollEnabled={false}
                            columnWrapperStyle={{
                                justifyContent: 'flex-start',
                                paddingRight: 5,
                                marginBottom: 10,
                            }}
                        />
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default Index;

/* =========================
   STYLES
========================= */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0D23',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    contentContainer: {
        minHeight: '100%',
        paddingBottom: 20,
    },
    logo: {
        width: 48,
        height: 40,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
    searchContainer: {
        marginTop: 20,
    },
    heading: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
});