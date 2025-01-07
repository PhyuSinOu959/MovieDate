import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  poster_path: string;
}

const MainScreen: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [category, setCategory] = useState<'genre' | 'popularity' | 'release'>('genre');

  useEffect(() => {
    // TODO: Implement movie fetching from API
    // This will be replaced with actual API calls
    const fetchMovies = async () => {
      // Placeholder data
      const dummyMovies: Movie[] = [
        {
          id: 1,
          title: "Sample Movie 1",
          genre_ids: [28, 12],
          popularity: 100.5,
          release_date: "2024-01-15",
          poster_path: "/sample1.jpg"
        },
        // Add more dummy movies as needed
      ];
      setMovies(dummyMovies);
    };

    fetchMovies();
  }, []);

  const categorizeMovies = () => {
    switch (category) {
      case 'genre':
        return {
          'Action': movies.filter(movie => movie.genre_ids.includes(28)),
          'Adventure': movies.filter(movie => movie.genre_ids.includes(12)),
        };
      case 'popularity':
        const sortedByPopularity = [...movies].sort((a, b) => b.popularity - a.popularity);
        return {
          'Trending': sortedByPopularity.slice(0, 10),
          'Popular': sortedByPopularity.slice(10, 20),
          'Rising': sortedByPopularity.slice(20)
        };
      case 'release':
        const now = new Date();
        return {
          'Now Playing': movies.filter(movie => new Date(movie.release_date) <= now),
          'Upcoming': movies.filter(movie => new Date(movie.release_date) > now),
        };
      default:
        return {};
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      
      <View style={styles.tabContainer}>
        {['genre', 'popularity', 'release'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, category === tab && styles.activeTab]}
            onPress={() => setCategory(tab as 'genre' | 'popularity' | 'release')}
          >
            <Text style={[styles.tabText, category === tab && styles.activeTabText]}>
              By {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        {Object.entries(categorizeMovies()).map(([categoryName, categoryMovies]) => (
          <View key={categoryName} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{categoryName}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
              {Array.isArray(categoryMovies) && categoryMovies.map((movie) => (
                <TouchableOpacity key={movie.id} style={styles.movieCard}>
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
                    style={styles.moviePoster}
                  />
                  <Text style={styles.movieTitle} numberOfLines={1}>
                    {movie.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  movieList: {
    paddingLeft: 16,
  },
  movieCard: {
    width: 140,
    marginRight: 12,
  },
  moviePoster: {
    width: 140,
    height: 210,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MainScreen; 