import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import COLORS from './colors';
import styles from './style';
import keys from './keys';

const {width} = Dimensions.get('screen');

const MainScreen = () => {
  const [res, setRes] = React.useState('0');
  const [expression, setExpression] = React.useState<any>('');
  const [text, setText] = React.useState<any>('');

  React.useEffect(() => {
    isFinite(expression[expression.length - 1])
      ? setRes(eval(expression))
      : expression.length > 0 &&
        setRes(eval(expression.slice(0, expression.length - 1)));
  }, [expression]);

  const onPressAllClear = () => {
    setRes('0');
    setExpression('');
    setText('');
    return;
  };

  const onPressClear = () => {
    if(expression.length === 1){
        onPressAllClear()
    }
    setExpression(expression.slice(0, -1));
    setText(text.slice(0, -1));
  };

  const setExpressionValue = item => {
    if(res == 'Infinity')
    return

    if (!isFinite(expression[expression.length - 1]) && !isFinite(item)) {
      return;
    }

    if (expression.length == 0) {
      setText('');
    }

    if (item === 'x') {
      setExpression(expression + '*');
      setText(text + 'x');
      return;
    }
    if (item === '÷') {
      setExpression(expression + '/');
      setText(text + '÷');
      return;
    }

    if (item === '=') {
      setExpression('');
      setText('');
      setRes('= ' + res);
      return;
    }
    setExpression(expression + item);
    setText(text + item);
    isFinite(expression[expression.length - 1]) && setRes(eval(expression));
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setExpressionValue(item)}
        style={
          isFinite(item )
            ? styles.button
            : item === '='
            ? [styles.op, {backgroundColor: COLORS.RED}]
            : styles.op
        }>
        <Text style={styles.key}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.container}>
        <Text style={styles.input}>{text}</Text>
        {res == '69' || res == '= 69' ? (
          <Text style={[styles.result, {color: COLORS.RED}]}>
            {res + ' noice'}
          </Text>
        ) : (
          <Text style={styles.result}>{res.toString().slice(0, 16)}</Text>
        )}
        <View style={styles.clearView}>
          {(expression.length > 0 || res.length > 0) && (
            <React.Fragment>
              <TouchableOpacity activeOpacity={0.8} onPress={onPressAllClear}>
                <Text style={[styles.clear, {marginRight: width - 130}]}>
                  {'All Clear'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={onPressClear}>
                <Text style={styles.clear}>{'Clear'}</Text>
              </TouchableOpacity>
            </React.Fragment>
          )}
        </View>
      </View>
      <View style={styles.keyboardView}>
        <FlatList
          bounces={false}
          data={keys}
          renderItem={renderItem}
          numColumns={4}
        />
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default MainScreen;
