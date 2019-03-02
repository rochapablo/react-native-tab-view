import React from 'react';
import { FlatList, View } from 'react-native';

export default class HomeTabsSceneComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <View noPadding>
        <View style={{ flex: 1 }}>
          <FlatList data={this.props.items} renderItem={({ item }) => <View />} initialNumToRender={1} />
        </View>
      </View>
    );
  }
}
