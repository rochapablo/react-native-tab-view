import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/home';

interface IProps {}

export default class App extends React.Component<IProps> {
  public render() {
    const lastPosts = [];
    const lastPostsByTagLadoB = [];
    const lastPostsByCategories = [];

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{ marginTop: 20, flex: 1 }}>
          <HomeScreen
            lastPosts={lastPosts}
            lastPostsByTagLadoB={lastPostsByTagLadoB}
            lastPostsByCategories={lastPostsByCategories} />
        </View>
      </View>
    );
  }
}
