import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import career from '../../image/semestacareer.jpg';
import webmabar from '../../image/webmabar.jpg';

export default function Skill({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      {/* skill coding */}
      <View>
        {/* bahasa pemrograman */}
        <View
          style={{
            width: '100%',
            marginTop: 5,
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                paddingLeft: 10,
              }}>
              TOOLS CODING
            </Text>
          </View>
          {/* <View
          style={{
            flexDirection:'row',
            width: '100%',
            justifyContent:'space-between',
            paddingHorizontal: 50,
          }}
          > */}
          {/* HTML */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              marginTop: 8,
            }}>
            <View
              style={{
                backgroundColor: '#ff6600',
                width: 120,
                marginHorizontal: 10,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-html5" size={100} color="#4d4d4d" />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                HTML
              </Text>
              {/* persentase skill */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    height: 15,
                    width: '85%',
                    backgroundColor: '#000000',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      height: 15,
                      width: '70%',
                      backgroundColor: 'blue',
                      borderRadius: 15,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 15,
                  }}>
                  70%
                </Text>
              </View>
            </View>
          </View>
          {/* CSS */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#1E90FF',
                width: 120,
                height: 120,
                marginHorizontal: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-css3" size={100} color="#4d4d4d" />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                CSS
              </Text>
              {/* persentase skill */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    height: 15,
                    width: '85%',
                    backgroundColor: '#000000',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      height: 15,
                      width: '60%',
                      backgroundColor: 'blue',
                      borderRadius: 15,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 15,
                  }}>
                  60%
                </Text>
              </View>
            </View>
          </View>
          {/* JAVASCRIPT */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#F0DB4F',
                width: 120,
                marginHorizontal: 10,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="logo-javascript" size={90} color="#4d4d4d" />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                JAVASCRIPT
              </Text>
              {/* persentase skill */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    height: 15,
                    width: '85%',
                    backgroundColor: '#000000',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      height: 15,
                      width: '10%',
                      backgroundColor: 'blue',
                      borderRadius: 15,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 15,
                  }}>
                  10%
                </Text>
              </View>
            </View>
          </View>
          {/* TAILWIND */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#47B5FF',
                width: 120,
                marginHorizontal: 10,
                height: 120,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon2 name="tailwind" size={100} color="#4d4d4d" />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                TAILWIND
              </Text>
              {/* persentase skill */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    height: 15,
                    width: '85%',
                    backgroundColor: '#000000',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      height: 15,
                      width: '80%',
                      backgroundColor: 'blue',
                      borderRadius: 15,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 15,
                  }}>
                  80%
                </Text>
              </View>
            </View>
          </View>
          {/* </View> */}
        </View>
        {/* bahasa pemrograman end */}

        {/* website start*/}
        <View
          style={{
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                paddingLeft: 10,
              }}>
              PORTOFOLIO WEB
            </Text>
          </View>
          <View
            style={{
              // flex:1,
              flexDirection: 'row',
              marginTop: 8,
            }}>
            {/* Semesta Career start */}
            <View
              style={{
                backgroundColor: '#ffffff',
                flex: 1,
                padding: 10,
                marginHorizontal: 5,
                borderRadius: 10,
              }}>
              <Image
                source={career}
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  height: 110,
                  width: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: 10,
                  marginBottom: 15,
                }}>
                SEMESTA CAREER
              </Text>
              <View
                style={{
                  backgroundColor: '#43A3FF',
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Career')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '500',
                      fontSize: 17,
                    }}>
                    Selengkapnya...
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                flex: 1,
                padding: 10,
                marginHorizontal: 5,
                borderRadius: 10,
              }}>
              <Image
                source={webmabar}
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  height: 110,
                  width: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: 10,
                  marginBottom: 15,
                }}>
                WEB MABAR
              </Text>
              <View
                style={{
                  backgroundColor: '#43A3FF',
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Web Mabar')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '500',
                      fontSize: 17,
                    }}>
                    Selengkapnya...
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Semesta Career end */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
