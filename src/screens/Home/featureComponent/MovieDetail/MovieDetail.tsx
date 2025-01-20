import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MovieDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/movie.jpg' }} style={styles.movieImage} />
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={24} color="gold" />
        <Text style={styles.movieRating}>8.5/10</Text>
      </View>
      <Text style={styles.movieSummary}>This is a detailed summary of the movie. It includes the plot, characters, and other interesting details.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  movieImage: {
    width: 200,
    height: 300,
    marginBottom: 16,
  },
  movieRating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  movieSummary: {
    fontSize: 16,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default MovieDetailScreen;