import React from 'react';
import { Text, View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './Cars';
import CarItem from '../CarItem';

const CarsList= (props) => {

    return (
      <View style={styles.container}>
          <FlatList 
          data={cars} 
          renderItem={({item})=> <CarItem car={item}/>}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
          />
      </View>  
    );
}

export default CarsList;