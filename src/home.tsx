import React from 'react';
import HomeTabsComponent from './tabs';

interface IProps {
  lastPosts: any[];
  lastPostsByTagLadoB: any[];
  lastPostsByCategories: any[];
}

export default class HomeScreen extends React.Component<IProps, {}> {
  public render() {
    return (
      <HomeTabsComponent {...this.props} />
    );
  }
}
