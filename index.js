module.exports = {
  get Button() {
    return require('./components/Button').default;
  },
  get SearchBar() {
    return require('./components/SearchBar').default;
  },
  get AssistiveTouch() {
    return require('./components/AssistiveTouch').default;
  }
};
// import Button from './components/Button';
// import SearchBar from './components/SearchBar';
// import AssistiveTouch from './components/AssistiveTouch';

// export default {
//     Button,
//     SearchBar,
//     AssistiveTouch
// }