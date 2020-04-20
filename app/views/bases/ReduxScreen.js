/**
 * desc：  redux测试
 * author：DestinyJun
 * date：  2020/4/19 10:13
 */
import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {store} from "../../Redux/store";
import {decrement, increment, isLoading, incrementAsync, decrementAsync} from "../../Redux/actions";
import {DECREMENT, INCREMENT} from "../../Redux/actionTypes";
import {bindActionCreators} from "redux";
// 为了防止自己手动调用 store.dispatch ，一般会使用redux的这个 bindActionCreators 方法来自动绑定 dispatch 方法
let actions = {
  increment(number) {
    return { type: INCREMENT ,number}
  },
  decrement(number) {
    return { type: DECREMENT,number }
  }
};
actions = bindActionCreators(actions, store.dispatch);

export class ReduxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number,
      isLoading: store.getState().isLoading,
    };
  }

  render() {
    return (
      <View>
        {/*普通使用*/}
        <Button title='增加的action-increment' color={'blue'} onPress={this.increment}/>
        <Button title='减少的action-decrement' color={'#D84BF8'} onPress={this.decrement}/>
        <Text style={[{fontSize: 20,fontWeight: '700',textAlign: 'center'}]}>
          计数器：{this.state.number}
        </Text>
        <Button title='登陆操作' color={'red'} onPress={this.isLoading}/>
        <Button title='退出操作' color={'black'} onPress={this.isOut}/>
        <Text style={[{fontSize: 20,fontWeight: '700',textAlign: 'center'}]}>
          登陆状态：{this.state.isLoading?'true':'false'}
        </Text>
        {/*react-redux*/}
        <Button title='react-redux增加的increment' color={'blue'} onPress={this.reactReduxIncrement}/>
        <Button title='react-redux减少的decrement' color={'#D84BF8'} onPress={this.reactReduxDecrement}/>
        <Text style={[{fontSize: 20,fontWeight: '700',textAlign: 'center'}]}>
          暂时没搞通
        </Text>
        {/*中间件实现异步操作*/}
        <Button title='异步操作增加的action-increment' color={'#2DE055'} onPress={this.incrementAsyncPress}/>
        <Button title='异步操作减少的action-decrement' color={'#FFDE0D'} onPress={this.decrementAsyncPress}/>
        <Text style={[{fontSize: 20,fontWeight: '700',textAlign: 'center'}]}>
          计数器：{this.state.number}
        </Text>
      </View>
    );
  }
  componentDidMount(): void {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().number,
        isLoading: store.getState().isLoading,
      });
    });
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe();
  }
  increment = () => {
    actions.increment(5);
    // store.dispatch(increment(5))
  };
  decrement = () => {
    actions.decrement(5);
    // store.dispatch(decrement(1))
  };
  isLoading = () => {
    store.dispatch(isLoading(true))
  };
  isOut = () => {
    store.dispatch(isLoading(false))
  };
  reactReduxIncrement = () => {

  };
  reactReduxDecrement = () => {

  };
  incrementAsyncPress = () => {
    incrementAsync(1)(store.dispatch)
  };
  decrementAsyncPress = () => {
    decrementAsync(1)(store.dispatch)
  };
}
