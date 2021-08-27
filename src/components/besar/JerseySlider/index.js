import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import { colors } from '../../../utils'
import ImageViewer from 'react-native-image-zoom-viewer';

class JerseySlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openImage: false,
            imagePreview: false
        }
    }

    prevImage = (index) => {
        this.setState({
            openImage: true,
            imagePreview: [
                {
                    url: '',
                    props: {
                        // Or you can set source directory.
                        source: this.props.image[index]
                    }
                }
            ]
        })
    }

    render() {
        const { image } = this.props
        const { openImage, imagePreview } = this.state
        return (
            <View>
                <SliderBox
                    images={image}
                    circleLoop
                    sliderBoxHeight={responsiveHeight(330)}
                    ImageComponentStyle={styles.jersey}
                    dotStyle={styles.dotStyle}
                    dotColor={colors.primary}
                    imageLoadingColor={colors.primary}
                    onCurrentImagePressed={(index) => this.prevImage(index)}
                />

                <Modal visible={openImage} transparent={true}>
                    <ImageViewer
                        imageUrls={imagePreview}
                        backgroundColor={colors.primary}
                        onClick={() => this.setState({ openImage: false })}
                        enableSwipeDown
                        onSwipeDown={() => this.setState({ openImage: false })}
                    />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    jersey: {
        marginTop: 25,
        width: responsiveWidth(344)
    },
    dotStyle: {
        marginTop: -50
    }
})

export default JerseySlider;
