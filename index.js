module.exports = {
  get Button() {
    return require('./components/Button').default;
  },
  get SearchBar() {
    return require('./components/SearchBar').default;
  },
  get AssistiveTouch() {
    return require('./components/AssistiveTouch').default;
  },
  get Radio() {
    return require('./components/Radio').default;
  },
  get CardForView(){
    return require('./components/CardForView').default;
  },
  get Colors(){
    return require('./components/Colors').default;
  }
};