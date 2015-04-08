"use strict";

var StyleSheet = require('StyleSheet');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  title: {
    flex: 1,
    color: "#333333",
    fontSize: 18
  },
  url: {
    flex: 1,
    marginTop: 7,
    color: "#999999",
    fontSize: 11
  }
});

module.exports = styles;
