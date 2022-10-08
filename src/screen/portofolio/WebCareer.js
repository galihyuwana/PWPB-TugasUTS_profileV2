import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import semestacareer1 from '../../../image/semestacareer.jpg';
import semestacareer2 from '../../../image/semestacareer2.jpg';
import semestacareer3 from '../../../image/semestacareer3.jpg';
import semestacareer4 from '../../../image/semestacareer4.jpg';
import semestacareer5 from '../../../image/semestacareer5.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const images = [
  semestacareer1,
  semestacareer2,
  semestacareer3,
  semestacareer4,
  semestacareer5,
];

const {width} = Dimensions.get('window');
const height = 240;

export default function WebCareer({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          height: 60,
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Icon
          name="arrow-back"
          size={30}
          style={{
            color: '#000000',
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 20,
            fontWeight: '500',
            color: '#000000',
          }}>
          Detail
        </Text>
      </View>
      {/* Content */}
      <ScrollView>
        <View>
          {/* image carousel */}
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              width,
              height,
            }}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={{
                  width,
                  height,
                  resizeMode: 'cover',
                }}
              />
            ))}
          </ScrollView>
          <View>
            <View
              style={{
                paddingTop: 7,
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                SEMESTA CAREER
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 5,
                }}>
                Website dengan style Landing Page ini dibuat semasa PKL, yang
                bertujuan untuk memberi informasi singkat tentang SEMESTA GROUP
                dan informasi tentang lowongan pekerjaan yang tersedia.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 10,
                }}>
                Link Website:
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://career.semestaplay.com/')
                }>
                <Text
                  style={{
                    color: '#43A3FF',
                    fontSize: 16,
                  }}>
                  https://career.semestaplay.com/
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Tools Yang Digunakan :
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingTop: 2,
                }}>
                <Icon2 name="angle-right" color={'#47B5FF'} size={20} />
                <Text
                  style={{
                    color: '#47B5FF',
                    fontSize: 17,
                    paddingLeft: 5,
                  }}>
                  Tailwind
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}>
                <Icon2 name="angle-right" color={'#F0DB4F'} size={20} />
                <Text
                  style={{
                    color: '#F0DB4F',
                    fontSize: 17,
                    paddingLeft: 5,
                  }}>
                  Javascript
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
