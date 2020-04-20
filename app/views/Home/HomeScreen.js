/**
 * desc：  主页组件
 * author：DestinyJun
 * date：  2020/3/16 20:25
 */
import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Constant} from "../../util/Constant";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      title: '主页'
    });
  }
  render() {
    return (
      <View style={[{flex: 1}]}>
        {/*<Button title={'案例'} color={'red'}/>*/}
        {
          Constant.MENU_LIST.map((item,index) => (
            <Button key={index} title={item.title} color={item.color} onPress={() =>{this.props.navigation.navigate(item.router)}}/>)
          )
        }
      </View>
    );
  }
}
