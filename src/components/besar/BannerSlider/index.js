import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider1, Slider2 } from '../../../assets';
import { SliderBox } from "react-native-image-slider-box";
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';
import { color } from 'react-native-elements/dist/helpers';


class BannerSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [Slider1, Slider2]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SliderBox images={this.state.images}
                    autoplay
                    circleLoop
                    sliderBoxHeight={responsiveHeight(130)}
                    ImageComponentStyle={styles.slider}
                    dotStyle={styles.dotStyle}
                    dotColor={colors.primary}
                    imageLoadingColor={colors.primary}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -15
    },
    slider: {
        borderRadius: 10,
        width: responsiveWidth(354)
    },
    dotStyle: {
        width: 10,
        height: 5,
        borderRadius: 5,        
    }
})

export default BannerSlider;