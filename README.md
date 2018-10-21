<h1 align="center">Pulse Animation for React Native</h1>
<p align="center">tinder-like pulse animation for your react native app (works on Android & iOS)</p>

<p align="center">
  <img src="http://i.giphy.com/l0MYz2cMbOryuyPZu.gif" />
</p>

### Installation
```bash
npm i react-native-pulse-animation --save
```

### ToDo
```bash
[] uncomment & fix the onPress event to work cross platform
[] refactor some code
```

### Example

```js
import React from 'react';
import styles from '../styles';
import PulseAnim from 'react-native-pulse-anim';

class App extends React.Component {
  render() {
    return (
    <View style={{marginTop:100}}>
       <PulseAnim style={[styles.container]} avatar={this.props.Img} />
	   <Text style={[styles.container, {top:0}]}>Example Text</Text>
	</View>
    );
  }
}
```


### API

| Property       | Type          | Default             | Description |
| -------------  |:-------------:|:------------:       | ----------- |
| interval       | number        | 2000                | action buttons visible or not
| size           | number        | 100                 | width and height of the avatar
| pulseMaxSize   | number        | 200                 | maximum size of the pulse in the background
| avatar         | string        | undefined           | **required** avatar url or local path to display
| pressInValue   | number        | 0.8                 | should be between 0 and 1. scale of the avatar, when pressed in
| pressDuration  | number        | 150                 | duration of the scale animation -DEACTIVATED 
| pressInEasing  | Easing        | Easing.in           | easing type of the press in animation -DEACTIVATED 
| pressOutEasing | Easing        | Easing.out          | easing type of the press out animation -DEACTIVATED 
| borderColor    | string        | '#D8335B'           | border color of the pulse
| backgroundColor| string        | '#ED225B55'         | background color of the pulse
| getStyle       | function      | undefined           | override the styling of the pulse. gets as parameter the Animated variable. e.g. (anim) => ({ backgroundColor: 'yellow' })
