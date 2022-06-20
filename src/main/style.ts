import {StyleSheet, Dimensions} from 'react-native';
import COLORS from './colors';
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY,
    padding: 20,
    alignItems: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: height / 2.2,
  },
  input: {
    fontSize: 50,
    height: 60,
    width: 'auto',
    color: COLORS.WHITE,
    letterSpacing: 2,
    marginTop: 40,
  },
  result: {
    fontSize: 34,
    color: COLORS.LIGHT_GREY,
    letterSpacing: 2,
  },
  clear: {
    fontSize: 14,
    color: COLORS.LIGHT_GREY,
    marginTop: 20,
  },
  bgView: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  key: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
  button: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  op: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: 50,
    backgroundColor: COLORS.DARK_GREY,
  },
  keyboardView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2.2,
  },
  clearView: {
    alignItems: 'center',
    height: height / 5,
    flexDirection: 'row',
    marginTop: 50,
  },
});

export default styles;
