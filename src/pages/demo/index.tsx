import  React from 'react';

import * as actions from '../../redux/actions';
import { IStoreState } from "../../redux/types";
import { connect } from 'react-redux';
import { Button } from 'antd';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}


class Demo extends React.Component<IProps,any> {

  public render() {
    const { name, enthusiasmLevel, onIncrement, onDecrement } = this.props;
    return (
      <div className="App">
        <Button type="primary" className="button">按钮</Button>
        <p>Hello React TypeScript</p>
        <div>
          <p>{name}</p>
          <p>{enthusiasmLevel}</p>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch:any) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);


