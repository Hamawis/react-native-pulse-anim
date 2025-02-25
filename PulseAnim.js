import React from 'react';
import { View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from './Pulse';


export default class PulseAnim extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			circles: []
		};

		this.counter = 1;
		this.setInterval = null;
		this.anim = new Animated.Value(1);
	}

	componentDidMount() {
		this.setCircleInterval();
	}

	componentWillUnmount() {
		clearInterval(this.setInterval);
	}

	setCircleInterval() {
		this.setInterval = setInterval(this.addCircle.bind(this), this.props.interval);
		this.addCircle();
	}

	addCircle() {
		this.setState({ circles: [...this.state.circles, this.counter] });
		this.counter++;
	}

	render() {
		const { size, avatar, avatarBackgroundColor, interval, imageDefaultSource } = this.props;

		return (
			<View style={{
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				{this.state.circles.map((circle) => (
					<Pulse
						key={circle}
						{...this.props}
					/>
				))}
					<Image
						source={avatar}
						style={{
							width: size,
							height: size,
							borderRadius: size/2,
							backgroundColor: avatarBackgroundColor
						}}
						defaultSource={imageDefaultSource}
					/>
			</View>
		);
	}	
}


PulseAnim.defaultProps = {
  interval: 2000,
  size: 100,
  pulseMaxSize: 200,
  avatar: undefined,
  avatarBackgroundColor: 'transparent',
  pressInValue: 0.8,
  pressDuration: 150,
  pressInEasing: Easing.in,
  pressOutEasing: Easing.in,
  borderColor: '#1c1d1f',
  backgroundColor: '#D1D1D1',
  getStyle: undefined,
};

