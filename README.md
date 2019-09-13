# react-native-components
Here are a bunch of components in the module to be installed and ready to use

# installation
```
npm install react-native-components --save
```

# Button
Put a text in Button; required: yes
# Properties

| Properties | Type | Default | Values | Description|
| --- | --- | --- | --- | --- |
| `buttonType` | `String` | `default` | `default`, `primary`, `success`, `info`, `warning`, `danger`, `link` | different style of button |
| `onPress` | `Function` | `null` | Pass a function | on button press, the function will be called |
| `style` | `Object` | `null` | Props of Stylesheet with values | give style to the button as the user wants |
| `textStyle` | `Object` | `null` | Props of Stylesheet with values | give style to the text in the button as the user wants |
| `buttonStretch` | `boolean` | `false` | `true`, `false` | if true, button will have screen width; else button is small

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

# Assistive Touch

# Properties
| Properties | Type | Default | Values | Description|
| --- | --- | --- | --- | --- |
| `comeBackToOriginalPosition` | `boolean` | `false` | `true`, `false` | if true, the assistiveTouch comes back to its original position; else it stays at the place where the user drops it |
| `onPress` | `Function` | `null` | Pass a function | If `comeBackToOriginalPosition` is true, the assistive touch when return to the original position calls this function; else the function is provoked when tapped on the button |
| `style` | `Object` | `null` | Props of Stylesheet with values | Change the style of the assistive touch according to the requirement of the user | 
| `startPosition` | `Object` | `{x: 0, y: screenHeight/3}` | coordinates of x and y | (0,0) is the position in the middle of the screen; set the x and y coordinates accordingly | 
| `text` | `String` | Empty String | Any String | Text in circle |
| `textStyle` | `Object` | `null` | Props of Stylesheet with values | Change the style of the text in assistive touch according to the requirement of the user | 