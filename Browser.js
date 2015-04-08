"use strict";

var React = require('react-native');
var StyleSheet = require('StyleSheet');
var {
  StyleSheet,
  WebView,
} = React;

var BrowserStyles = require('./styles/BrowserStyles');

var WEBVIEW_COMPONENT = "webview";

var Browser = React.createClass({
  onLoadingError: function(event) {
    console.error("encountered an error loading page", event.nativeEvent);
  },

  render: function() {
    return (
      <WebView ref={WEBVIEW_COMPONENT}
               style={BrowserStyles.browserWindow}
               onLoadingError={this.onLoadingError}
               url={this.props.url} />
    );
  }
});

module.exports = Browser;
