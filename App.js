import React from 'react';
import AppNavigator from './src/main/AppNavigator';
import 'react-native-gesture-handler';
import BluetoothManager from './src/screens/BluetoothManager';
// import LineGraph from './src/screens/LineGraph';

const App = () => {
  return (
    // <LineGraph
    //   containerHeight={400}
    //   lineColor='tomato'
    //   circleColor="tomato"
    //   circleRadius={4}
    //   axisColor="#f5f5f5"
    //   axisWidth={2}
    //   lineCharts={[
    //     {
    //       day: 'Sun',
    //       value: 98,
    //     },
    //     {
    //       day:'Mon',
    //       value:96
    //     },
    //     {
    //       day:'Tues',
    //       value:94
    //     },
    //     {
    //       day:'Wed',
    //       value:98
    //     },
    //     {
    //       day:'Thurs',
    //       value:95
    //     },
    //     {
    //       day:'Fri',
    //       value:96
    //     },
    //     {
    //       day:'Sat',
    //       value:92
    //     }
    //   ]}
    // />
    // <AppNavigator/>
    <BluetoothManager/>
  );
};

export default App;
