import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import Home from './Home'

import Heart from './Heart'

import Camera from './Camera'

const icons = {
  home: Home,
  heart: Heart,
  camera: Camera,
}
const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={'black'}
      {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({})