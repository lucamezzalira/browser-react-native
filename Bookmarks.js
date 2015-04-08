"use strict";

var React = require('react-native');
var StyleSheet = require('StyleSheet');
var {
  ListView,
  Text,
  TouchableHighlight,
  View
} = React;

var BookmarksStyles = require('./styles/BookmarksStyles');
var EventHub = require("./EventHub");

var BOOKMARKS_JSON = "./data/bookmarks.json";
var ds;

var Bookmarks = React.createClass({
  getDefaultProps: function(){
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([
        {"title": "React Native", "url": "http://native.reactjs.com"},
        {"title": "React JS", "url": "http://facebook.github.io/react/"},
        {"title": "Personal Blog", "url": "http://lucamezzalira.com"},
        {"title": "London JS", "url": "http://www.meetup.com/London-JavaScript-Community/"},
        {"title": "infoQ", "url": "http://www.infoq.com"},
        {"title": "Scrum Alliance", "url": "http://www.scrumalliance.com"}
        ])
    };
  },

  onPressRow: function(selectedURL){
    EventHub.emit("url_changed_event", selectedURL);
  },

  getItemComponent: function(rowData){
    return(
      <TouchableHighlight onPress={() => this.onPressRow(rowData.url)}>
          <View>
            <View style={BookmarksStyles.row}>
              <Text style={BookmarksStyles.title}>
                {rowData.title}
              </Text>
              <Text style={BookmarksStyles.url}>
                {rowData.url}
              </Text>
            </View>
            <View style={BookmarksStyles.separator} />
          </View>
        </TouchableHighlight>
    )
  },

  render: function() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.getItemComponent}
      />
    );
  }
});

module.exports = Bookmarks;
