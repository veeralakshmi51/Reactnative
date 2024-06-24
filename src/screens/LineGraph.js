import {View, Text, Dimensions, StyleSheet, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Svg, {G, Circle, Line, Text as SvgText} from 'react-native-svg';

const width = Dimensions.get('screen').width;
const LineGraph = ({
  lineCharts = [],
  containerHeight = 400,
  circleColor = '#ccc',
  circleRadius = 4,
  axisColor = '#fff',
  axisWidth = 2,
}) => {
  const margin_x_fromLeft = 50;
  const margin_y_fromBottom = 50;
  const padding_from_screenBorder = 20;

  const y_min_value = 0;
  const y_max_value = Math.max.apply(
    Math,
    lineCharts.map(item => {
      item.value;
    }),
  );

  const gap_between_y_axis=(y_max_value-y_min_value)/4
  const [yaxisLabels,setLabels]=useState([]);

  const x_axis_x1Point = margin_x_fromLeft;
  const x_axis_y1Point = containerHeight - margin_y_fromBottom;
  const x_axis_x2Point = width - padding_from_screenBorder;
  const x_axis_y2Point = containerHeight - margin_y_fromBottom;
  const x_axis_actual_width =
    width - margin_x_fromLeft - padding_from_screenBorder;
  const gap_between_x_axis_ticks =
    x_axis_actual_width / (lineCharts.length - 1);

  const y_axis_x1Point = margin_x_fromLeft;
  const y_axis_y1Point = padding_from_screenBorder;
  const y_axis_x2Point = margin_x_fromLeft;
  const y_axis_y2Point = containerHeight - margin_y_fromBottom;


  const AnimatedLine = Animated.createAnimatedComponent(Line);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const x_axis_y_axis = () => {
    return (
      <G key="x_axis y_axis">
        <AnimatedCircle
          key="x_axis x1y1_circle"
          cx={x_axis_x1Point}
          cy={x_axis_y1Point}
          fill={circleColor}
          r={animate_circle_radius}></AnimatedCircle>
        <AnimatedCircle
          key="x_axis x2y2_circle"
          cx={x_axis_x2Point}
          cy={x_axis_y2Point}
          fill={circleColor}
          r={animate_circle_radius}></AnimatedCircle>
        <AnimatedCircle
          key="y_axis x1y1_circle"
          cx={y_axis_x1Point}
          cy={y_axis_y1Point}
          fill={circleColor}
          r={animate_circle_radius}></AnimatedCircle>
        <AnimatedLine
          key="x_axis"
          x1={x_axis_x1Point}
          y1={x_axis_y1Point}
          x2={animated_x_axis_width}
          y2={x_axis_y2Point}
          stroke={axisColor}
          strokeWidth={axisWidth}></AnimatedLine>
        <AnimatedLine
          key="y_axis"
          x1={y_axis_x1Point}
          y1={animated_y_axis_width}
          x2={y_axis_x2Point}
          y2={y_axis_y2Point}
          stroke={axisColor}
          strokeWidth={axisWidth}></AnimatedLine>
      </G>
    );
  };

  const animated_x_axis_width = useRef(
    new Animated.Value(x_axis_x1Point),
  ).current;
  const animated_y_axis_width = useRef(
    new Animated.Value(y_axis_y2Point),
  ).current;
  const animate_circle_radius = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    
    start_axis_circle_animation();
    start_x_axis_y_axis();
  }, []);

  const start_axis_circle_animation = () => {
    Animated.timing(animate_circle_radius, {
      toValue: circleRadius,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  const start_x_axis_y_axis = () => {
    Animated.timing(animated_x_axis_width, {
      toValue: x_axis_x2Point,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(animated_y_axis_width, {
      toValue: y_axis_y1Point,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const x_axis_labels_and_ticks = () => {
    return lineCharts.map((item, index) => {
      let x_point = x_axis_x1Point + gap_between_x_axis_ticks * index;
      return (
        <G key={`x axis lables and ticks${index}`}>
          <Line
            key={`x-axis-ticks${index}`}
            x1={x_point}
            y1={x_axis_y1Point}
            x2={x_point}
            y2={x_axis_y1Point + 10}
            strokeWidth={axisWidth}
            stroke={axisColor}></Line>
          <SvgText
            x={x_point}
            y={x_axis_y1Point + 20}
            fill={axisColor}
            textAnchor="middle">
            {item?.day}
          </SvgText>
        </G>
      );
    });
  };

  // const y_axis_labels_and_ticks = () => {
  //   return yaxisLabels.map((item,index)=>{
  //     return (
  //       <G key={`y axis lables and ticks ${index}`}>
  //         <Line
  //           key={`y-axis-ticks${index}`}
  //           x1={margin_x_fromLeft}
  //           y1={padding_from_screenBorder}
  //           x2={margin_x_fromLeft - 10}
  //           y2={padding_from_screenBorder}
  //           stroke={axisColor}
  //           strokeWidth={axisWidth}></Line>
  //       </G>
  //     );
  //   })
   
  // };
  return (
    <View style={[styles.wrapper, {height: containerHeight}]}>
      <AnimatedSvg height="100%" width="100%" style={styles.svgStyle}>
        {x_axis_y_axis()}
        {x_axis_labels_and_ticks()}
        {/* {y_axis_labels_and_ticks()} */}
      </AnimatedSvg>
    </View>
  );
};

export default LineGraph;
const styles = StyleSheet.create({
  wrapper: {
    height: 400,
    backgroundColor: 'black',
  },
  svgStyle: {
    backgroundColor: '#1A1A1A',
  },
});
