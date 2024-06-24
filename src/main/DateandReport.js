import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Data = [
  {label: 'Daily Report', value: 1},
  {label: 'Weekly Report', value: 2},
  {label: 'Monthly Report', value: 3},
];

const DateandReport = () => {
  const [value, setValue] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = date => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View>
      {/* <Dropdown
        style={styles.dropdown}
        data={Data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select report type"
        value={value}
        containerStyle={{ backgroundColor: 'black' }}
        onChange={(item) => setValue(item.value)}
        renderLeftIcon={() => (
          <Icon
            name="page-search"
            size={20}
            color="white"
            style={styles.icon}
          />
        )}
      /> */}
      <View style={{padding: 20}}>
        <Button
          title={selectedDate ? `${formatDate(selectedDate)}` : 'Choose Date'}
          onPress={showDatePicker}
          color="#1a1a1a"
          buttonStyle={{backgroundColor:'tomato'}}
          icon={<Icon name="calendar-alt" size={20} color="white" style={{paddingHorizontal:15}}/>}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default DateandReport;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
    margin: '5%',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
