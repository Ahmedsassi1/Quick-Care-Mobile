import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Pharmacies = ({ navigation }) => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.895042, 
          longitude: 10.181160,
          latitudeDelta: 0.008,
          longitudeDelta: 0.015,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: 36.899544,
            longitude: 10.185515,
          }} >
             <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />

        </Marker>
           <Marker
          coordinate={{
            latitude: 36.885664,
            longitude: 10.184446,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
           <Marker
          coordinate={{
            latitude: 36.898887,
            longitude: 10.183889,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
           <Marker
          coordinate={{
            latitude: 36.892868,
            longitude: 10.181320,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
            <Marker
          coordinate={{
            latitude: 36.890006,
            longitude: 10.180292,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
            <Marker
          coordinate={{
            latitude: 36.888592,
            longitude: 10.182801,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
              <Marker
          coordinate={{
            latitude: 36.889109, 
            longitude: 10.178000,
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
            <Marker
          coordinate={{
            latitude: 36.896592, 
            longitude:10.181658, 
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
          <Marker
          coordinate={{
            latitude: 36.898932,
            longitude: 10.181084, 
          }}
        >
          <Image source={require('../../../assets/51473.png')} style={{ height: 35, width: 35 }} />
        </Marker>
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Pharmacies;
