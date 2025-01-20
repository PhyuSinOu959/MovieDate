import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/movie.jpg' }} style={styles.movieImage} />
      <Text style={styles.movieRating}>Rating: 8.5/10</Text>
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
    marginBottom: 8,
  },
  movieSummary: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MovieDetailScreen;