import React from 'react';
import Avatar from 'material-ui/Avatar';
import Star from 'material-ui/svg-icons/toggle/star';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

const TabContents = ({ children }) => (
  <div>
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div className='first' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar size={60} icon={<Star />} />
      <RaisedButton label='Secondary' secondary />
      <RaisedButton label='Primary' primary />
      <RaisedButton label='Default' />
    </div>
    <div className='second'>
      <Checkbox label='checkbox' />
      <Checkbox label='disabled checkbox' disabled />
      <RadioButtonGroup name='currency' defaultSelected='USD'>
        <RadioButton label='USD' value='USD' />
        <RadioButton label='Euro' value='Euro' />
        <RadioButton label='MXN' value='MXN' disabled />
      </RadioButtonGroup>
      <Toggle label='toggle' defaultToggled />
      <Toggle label='disabled toggle' disabled />
    </div>
    <div className='third' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField hintText='Text Field' />
      <DatePicker hintText='Landscape Dialog' mode='landscape' />
      <SelectField
        value={3}
        onChange={() => {}}
      >
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </SelectField>
    </div>
  </div>
  <Slider style={{ width: '90%', margin: '0 auto' }}defaultValue={0.5} />
  {children}
  </div>
);

export default TabContents;
