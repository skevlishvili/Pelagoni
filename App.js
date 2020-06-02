import React, {Component, useEffect, useState} from 'react';
import {View, TouchableOpacity, Animated, Text, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import pp from './static/images/pp.png';
import p from './static/images/p.png';
import villa from './static/images/villa.png';
import saburtalo from './static/images/saburtalo.png';
import pin from './static/images/pin.png';
import logoRestaurant from './static/images/logoRestaurant.png';

const App = () => {
  const [showWebView, setShowWebView] = useState(true);
  const [link, setLink] = useState();

  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const value2 = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const value3 = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  function moveSecondBall() {
    Animated.timing(value2, {
      toValue: {x: -100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  function moveThirdBall() {
    Animated.timing(value3, {
      toValue: {x: 0, y: -130},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  function ChangeLink() {
    switch (link) {
      case 1:
        return <WebView source={{uri: 'http://pelagoni.ge/shop'}} />;
      case 2:
        return <WebView source={{uri: 'http://pelagoni.ge/saburtalo/shop'}} />;
      case 3:
        return <WebView source={{uri: 'http://pelagoni.ge/villa/shop'}} />;
      default:
        break;
    }
  }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      {showWebView ? (
        <View>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animated.View style={value.getLayout()}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'yellow',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setLink(1);

                  setShowWebView(false);
                }}>
                <Image source={saburtalo} style={{width: 70, height: 70}} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={value2.getLayout()}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  zIndex: 10,
                  marginTop: -50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setLink(3);

                  setShowWebView(false);
                }}>
                <Image source={villa} style={{width: 70, height: 70}} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={value3.getLayout()}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  zIndex: 10,
                  marginTop: -50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setLink(2);
                  setShowWebView(false);
                }}>
                <Image source={p} style={{width: 70, height: 70}} />
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                zIndex: 10,
                marginTop: -50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                moveBall(), moveSecondBall(), moveThirdBall();
              }}>
              <Image source={pp} />
            </TouchableOpacity>
            <Image
              source={pin}
              style={{
                position: 'absolute',
                width: 40,
                height: 50,
                bottom: 100,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={logoRestaurant}
              style={{
                position: 'absolute',
                width: 100,
                height: 100,
                top: 100,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      ) : (
        ChangeLink()
      )}
    </View>
  );
};

export default App;
