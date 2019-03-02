import React from 'react';
import { Dimensions } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import HomeTabsSceneComponent from './tabs-scene';

export default class HomeTabsComponent extends React.Component<{}, {}> {
  public carouselPosts: any;
  public carouselLastPosts: any;
  public lastPosts: any;
  public editorialPosts: any;
  public columnistPosts: any;
  public diretoDasRuasPosts: any;
  public veiculosPosts: any;
  public ladoBPosts: any;

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'home', title: 'home' },
        { key: 'ultimas', title: 'últimas' },
        { key: 'ladob', title: 'lado b' },
        { key: 'editorias', title: 'editorias' },
        { key: 'colunistas', title: 'colunistas' },
        { key: 'diretodasruas', title: 'direto das ruas' },
        { key: 'veiculos', title: 'veículos' },
      ],
    };
  }

  public componentDidMount() {
    this.carouselPosts = [];
    this.carouselLastPosts = [];
    this.lastPosts = [];
    this.ladoBPosts = [];
  }

  public renderTabBar(props) {
    return (
      <TabBar
        {...props}
        scrollEnabled
        bounces
        style={{ backgroundColor: '#f8f8f8' }}
        labelStyle={{ color: '#666666', textAlign: 'center' }}
        indicatorStyle={{ backgroundColor: '#f49b00' }}
        tabStyle={{ width: 'auto', padding: 0, paddingHorizontal: 2, paddingVertical: 4 }}
      />
    );
  }

  public render() {
    const renderScene = ({ route }) => {
      switch (route.key) {
        case 'home':
          return <HomeTabsSceneComponent {...this.props} items={this.carouselLastPosts} carouselItems={this.carouselPosts} />;
        case 'ultimas':
          return <HomeTabsSceneComponent {...this.props} items={this.lastPosts} />;
        case 'ladob':
          return <HomeTabsSceneComponent {...this.props} items={this.ladoBPosts} />;
        case 'editorias':
          return <HomeTabsSceneComponent {...this.props} items={this.editorialPosts} />;
        case 'colunistas':
          return <HomeTabsSceneComponent {...this.props} items={this.columnistPosts} />;
        case 'diretodasruas':
          return <HomeTabsSceneComponent {...this.props} items={this.diretoDasRuasPosts} />;
        case 'veiculos':
          return <HomeTabsSceneComponent {...this.props} items={this.veiculosPosts} />;
        default:
          return null;
      }
    };
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={(props) => this.renderTabBar(props)}
        renderScene={renderScene}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
    );
  }
}
