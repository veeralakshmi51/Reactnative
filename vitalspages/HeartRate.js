import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../src/screens/Header';
import DateandReport from '../src/main/DateandReport';
import {LineChart} from 'react-native-chart-kit';
import {Svg, Circle, Rect, Text as SvgText} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;

const HeartRate = ({navigation}) => {
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  const [reportType, setReportType] = useState('daily');

  const getData = () => {
    switch (reportType) {
      case 'daily':
        return {
          labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
          datasets: [
            {
              data: [92,98,91,88,97,92],
              strokeWidth: 2,
            },
          ],
        };
      case 'weekly':
        return {
          labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
          datasets: [
            {
              data: [78,85,76,92,84,92,88],
              strokeWidth: 2,
            },
          ],
        };
      case 'monthly':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              data: [95,86,92,91],
              strokeWidth: 2,
            },
          ],
        };
      default:
        return {
          labels: [],
          datasets: [],
        };
    }
  };

  const data = getData();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header title="Heart Rate" icon={require('../src/images/plus.png')} navigation={navigation}/>
      <DateandReport />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setReportType('daily')}
          style={styles.button}>
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setReportType('weekly')}
          style={styles.button}>
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setReportType('monthly')}
          style={styles.button}>
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View>
        <LineChart
          data={data}
          width={screenWidth - 16}
          height={400}
          yAxisInterval={2}
          chartConfig={{
            backgroundColor: '#1A1A1A',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {borderRadius: 16},
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ff6347',
            },
            decimalPlaces: 0,
          }}
          bezier
          style={{borderRadius: 16, margin: 10, paddingTop: 40}}
          decorator={() => {
            return tooltipPos.visible ? (
              <Svg>
                <Rect
                  x={tooltipPos.x - 30}
                  y={tooltipPos.y - 40}
                  // width="80"
                  // height="40"
                  // fill="white"
                  rx="5"
                />
                <SvgText
                  x={tooltipPos.x}
                  y={tooltipPos.y - 20}
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle">
                  {tooltipPos.value}
                </SvgText>
                <Circle
                  cx={tooltipPos.x}
                  cy={tooltipPos.y}
                  r="6"
                  stroke="rgb(134, 65, 244)"
                  strokeWidth="2"
                  fill="white"
                />
              </Svg>
            ) : null;
          }}
          onDataPointClick={data => {
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos(previousState => ({
                  ...previousState,
                  value: data.value,
                  visible: !previousState.visible,
                }))
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
    </View>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
