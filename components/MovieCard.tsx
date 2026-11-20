import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../2025-03 React Native Movie App/React Native Movie App (assets)/constants/icons';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = (screenWidth - 60) / 3;

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const router = useRouter();
    // console.log("Movie Card", movie);
    // console.log("router", router);
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
        : null;

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/movies/${movie.id}`)}
        >
            <View style={styles.posterContainer}>
                {posterUrl ? (
                    <Image
                        source={{ uri: posterUrl }}
                        style={styles.poster}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>{movie.title}</Text>
                    </View>
                )}
                <View style={styles.ratingBadge}>
                    <Image source={icons.star} style={styles.starIcon} />
                    <Text style={styles.ratingText}>
                        {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}
                    </Text>
                </View>
            </View>
            <Text style={styles.title} numberOfLines={1}>
                {movie.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        marginHorizontal: 5,
        marginBottom: 16,
    },
    posterContainer: {
        position: 'relative',
        aspectRatio: 2 / 3,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#221F3D',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    placeholderText: {
        color: '#A8B5DB',
        fontSize: 10,
        textAlign: 'center',
    },
    ratingBadge: {
        position: 'absolute',
        top: 6,
        left: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 13, 35, 0.75)',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
    },
    starIcon: {
        width: 10,
        height: 10,
        marginRight: 3,
        tintColor: '#FFC107',
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 9,
        fontWeight: 'bold',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 6,
        paddingHorizontal: 2,
    },
});

export default MovieCard;
