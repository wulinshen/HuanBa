import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { itemUpdate } from '../../actions';



class AddImageButton extends React.Component {

  // state = {
  //   avatarSource: null,
  // };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;

        // You can display the image using either:
        // source = { uri: 'data:image/jpeg;base64,' + response.data };

        // Or:
        if (Platform.OS === 'android') {
          source = { uri: response.uri };
        } else {
          source = { uri: response.uri.replace('file://', '') };
        }

        // this.setState({
        //   avatarSource: source
        // });

         this.props.itemUpdate({ prop: 'itemImageUrl', value: source.uri });

        // console.log('source:',source);


      }
    });
  }

  render() {
    // console.log('this.state.avatarSource',this.state.avatarSource);
    console.log('this.props.itemImageUrl', this.props.itemImageUrl);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.props.itemImageUrl === '' ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={{uri: this.props.itemImageUrl}} />
          }
          </View>
        </TouchableOpacity>


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

const mapStateToProps = (state) => {
  const { _id, itemName, category, description, itemImageUrl } = state.itemForm;
  // console.log( _id, itemName, category, description, itemImageUrl );
  // debugger;
  return { _id, itemName, category, description, itemImageUrl };
};

// export default AddImageButton;

 export default connect(mapStateToProps, { itemUpdate })(AddImageButton);
