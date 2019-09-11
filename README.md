# react-native-components
Here are a bunch of components in the module to be installed and ready to use

# installation
```
npm install react-native-components --save
```

# Button

# Properties

| Properties | Type | Default | Values | Description|
| --- | --- | --- | --- | --- |
| `buttonText` |  `String` | `Submit` | Any String | text in button |
| `buttonType` | `String` | `btn-default` | `btn-default`, `btn-primary`, `btn-success`, `btn-info`, `btn-warning`, `btn-danger`, `btn-link` | different style of button |
| `handleButtonPress` | `Function` | `null` | Pass a function | on button press, the function will be called |
| `style` | `Object` | `null` | Props of Stylesheet with values | give style to the button as the user wants |
| `buttonStretch` | `bool` | `false` | `true`, `false` | if true, button will have screen width; else button is small

# Search Bar

# Properties
| Properties | Type | Default | Values | Description|
| --- | --- | --- | --- | --- |
| `placeholderText` | `String` | `Search...` | Any String | The placeholder text in the search bar |
| `onSearchTextChange` | `Function` | `null` | function | The function will be called as soon as the text changes in the search bar |
| `onSearchPress` | `Function` | `null` | function | When clicked on the search icon, the function is invoked |
| `searchBarStyle` | `Object` | `null` | Props of Stylesheet with values | change the style of the search Bar according to the requirement of the user |
| `searchBarHighlightStyle` | `Object` | `null` | Props of Stylesheet with values | Highlights the search bar when focused on | 
| `placeholderTextStyle` | `Object` | `null` | Props of Stylesheet with values | Change the style of the placeholder text according to the requirement of the user | 
| `searchIconStyle` | `Object` | `null` | Props of Stylesheet with values | Change the style of the search icon according to the requirement of the user | 
