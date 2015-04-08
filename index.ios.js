'use strict';

var React = require('react-native');
var StyleSheet = require('StyleSheet');
var {
  NavigatorIOS,
  AppRegistry,
  StatusBarIOS
} = React;

var Browser = require("./Browser");
var Bookmarks = require("./Bookmarks");
var EventHub = require("./EventHub");

var NAVIGATOR_COMPONENT = "navigator";

var WebBrowser = React.createClass({

  getInitialState: function() {
    return {
      url: "http://www.infoq.com/"
    };
  },

  componentDidMount:function() {
    StatusBarIOS.setHidden(true, StatusBarIOS.Animation.slide);
    EventHub.addListener("url_changed_event", this.goToBrowser)
  },

  goToBrowser: function(data){
    this.setState({url: data});
    this.refs[NAVIGATOR_COMPONENT].replacePreviousAndPop(this.getBrowserRoute());
  },

  goToBookmarks: function(){
    this.refs[NAVIGATOR_COMPONENT].push(this.getBookmarksRoute());
  },

  getBrowserRoute: function(){
    var currentURL = {url: this.state.url};
    return {
      component: Browser,
      rightButtonTitle: "Bookmarks",
      onRightButtonPress: this.goToBookmarks,
      title: 'Browser',
      passProps: currentURL
    };
  },

  getBookmarksRoute: function(){
    var currentURL = {url: this.state.url};
    return {
      title: "Bookmarks",
      component: Bookmarks,
      backButtonTitle: "Browser",
      passProps: currentURL
    };
  },

  render: function() {
    return(
        <NavigatorIOS ref={NAVIGATOR_COMPONENT}
          style={styles.container}
          initialRoute={this.getBrowserRoute()} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    tintColor:"#008888",
    backgroundColor: '#FFFFFF'
  }
});

AppRegistry.registerComponent('WebBrowser', () => WebBrowser);
