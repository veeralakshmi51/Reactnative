import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Header from './Header';
import DateandReport from '../main/DateandReport';
import {Svg, Circle, Rect, Text as SvgText} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;

const VitalsReport = ({navigation}) => {
  const [tooltip, setTooltip] = useState({
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
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              strokeWidth: 2,
            },
          ],
        };
      case 'weekly':
        return {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              strokeWidth: 2,
            },
          ],
        };
      case 'monthly':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              strokeWidth: 2,
            },
          ],
        };

        // case 'perHour':
        //   return{
        //     labels:['6.15 AM','6.30 AM','6.45 AM','7 AM','7.15 AM','7.30 AM','7.45 AM','8 AM','8.15 AM','8.30 AM','8.45 AM','9 AM']
        //   }
      default: {
        return {
          labels: [],
          datasets: [],
        };
      }
    }
  };

  const data = getData();

  return (
    <View style={styles.container}>
      <Header icon={require('../images/plus.png')} title="Vitals Report" navigation={navigation}/>
      <DateandReport />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setReportType('daily')} style={styles.button}>
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setReportType('weekly')} style={styles.button}>
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setReportType('monthly')} style={styles.button}>
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View>
        <BarChart
          data={data}
          width={Dimensions.get('window').width - 16}
          height={400}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#1A1A1A',
            backgroundGradientFrom: '#1A1A1A',
            backgroundGradientTo: '#1A1A1A',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {borderRadius: 16},
            decimalPlaces: 0,
          }}
          style={{borderRadius: 16, paddingTop: 20}}
          decorator={() => {
            return tooltip.visible ? (
              <Svg>
                <Rect
                  x={tooltip.x - 30}
                  y={tooltip.y - 40}
                  width="60"
                  height="30"
                  rx="5"
                  fill="rgba(0, 0, 0, 0.8)"
                />
                <SvgText
                  x={tooltip.x}
                  y={tooltip.y - 20}
                  fill="white"
                  fontSize="15"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {tooltip.value.toFixed(2)}
                </SvgText>
                <Circle
                  cx={tooltip.x}
                  cy={tooltip.y}
                  r="6"
                  stroke="rgb(134, 65, 244)"
                  strokeWidth="2"
                  fill="white"
                />
              </Svg>
            ) : null;
          }}
          onDataPointClick={data => {
            let isSamePoint = tooltip.x === data.x && tooltip.y === data.y;
            isSamePoint
              ? setTooltip(prev => ({
                  ...prev,
                  visible: !prev.visible,
                }))
              : setTooltip({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
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

export default VitalsReport;
