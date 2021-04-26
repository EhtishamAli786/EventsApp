import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Platform} from 'react-native';
import {EventType} from 'components';

const options = [
  {
    label: 'All',
    value: 'all',
  },
  {label: 'Event', value: 'event'},
  {label: 'Out of Office', value: 'out_of_office'},
  {label: 'Task', value: 'task'},
];

type Props = {
  defaultValue: EventType['eventType'] | 'all';
  items?: typeof options;
  onChangeItem: (e: {value: EventType['eventType']}) => void;
};

export const Picker: React.FC<Props> = ({
  items = options,
  onChangeItem = e => {},
  defaultValue = 'all',
}) => {
  return (
    <View
      style={{
        position: 'relative',
        ...(Platform.OS !== 'android' && {
          zIndex: 10,
        }),
      }}>
      <DropDownPicker
        items={items}
        containerStyle={{height: 40, width: 140}}
        defaultValue={defaultValue}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={onChangeItem}
        zIndex={5000}
        zIndexInverse={6000}
      />
    </View>
  );
};
