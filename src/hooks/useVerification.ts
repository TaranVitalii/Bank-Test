import * as R from 'ramda';
import {useMemo, useRef, useState, useEffect} from 'react';
import {TextInput} from 'react-native';

import {NativeEventProps} from 'interfaces';
import {inputSeparator} from '../helpers';
import {maxVerifyLength, separatorLength} from '../models';

const useVerification = () => {
  const verificationRefs = {
    first: useRef<TextInput>(),
    second: useRef<TextInput>(),
    thirty: useRef<TextInput>(),
    fourth: useRef<TextInput>(),
  };
  const [disabled, setDisabled] = useState<boolean>(false);
  const [verifyNumber, setVerifyNumber] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const firstNumber: string = R.propOr('', '1', verifyNumber);
  const secondNumber: string = R.propOr('', '2', verifyNumber);
  const thirtyNumber: string = R.propOr('', '3', verifyNumber);
  const fourthNumber: string = R.propOr('', '4', verifyNumber);

  useEffect(() => {
    if (
      firstNumber.length === 1 &&
      secondNumber.length === 1 &&
      thirtyNumber.length === 1 &&
      fourthNumber.length === 1
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    firstNumber.length,
    secondNumber.length,
    thirtyNumber.length,
    fourthNumber.length,
  ]);

  return useMemo(() => {
    /**
     * On Change handler for first input
     */
    const firstOnChangeHandler = (value: string) => {
      if (value.length <= 1) {
        setVerifyNumber({...verifyNumber, 1: value});
      }
      if (value.length >= 1) {
        if (verificationRefs.second.current) {
          verificationRefs.second.current.focus();
        }
      }
    };

    /**
     * On Change handler for second input
     */
    const secondOnChangeHandler = (value: string) => {
      if (value.length <= 1) {
        setVerifyNumber({...verifyNumber, 2: value});
      }

      if (value.length >= 1) {
        if (verificationRefs.thirty.current) {
          verificationRefs.thirty.current.focus();
        }
      }
    };

    /**
     * On Change handler for thirty input
     */
    const thirtyOnChangeHandler = (value: string) => {
      if (value.length <= 1) {
        setVerifyNumber({...verifyNumber, 3: value});
      }
      if (value.length >= 1) {
        if (verificationRefs.fourth.current) {
          verificationRefs.fourth.current.focus();
        }
      }
    };

    /**
     * On Change handler for fourth input
     */
    const fourthOnChangeHandler = (value: string) => {
      if (value.length <= 1) {
        setVerifyNumber({...verifyNumber, 4: value});
      }
    };

    /**
     * First input key press
     */
    const onKeyFirstInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 2 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxVerifyLength,
          separatorLength,
        );
        setVerifyNumber(formattedValue);
      }

      if (
        firstNumber.length === 1 &&
        verificationRefs.second.current &&
        pressedKey !== 'Backspace'
      ) {
        verificationRefs.second.current.focus();
      }
    };

    /**
     * Second input key press
     */
    const onKeySecondInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 2 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxVerifyLength,
          separatorLength,
        );

        setVerifyNumber(formattedValue);
      }

      if (
        verificationRefs.first.current &&
        pressedKey === 'Backspace' &&
        R.isEmpty(secondNumber)
      ) {
        verificationRefs.first.current.focus();
      }

      if (
        pressedKey !== 'Backspace' &&
        secondNumber.length >= 2 &&
        verificationRefs.thirty.current
      ) {
        verificationRefs.thirty.current.focus();
      }
    };

    /**
     * Thirty input key press
     */
    const onKeyThirtyInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 2 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxVerifyLength,
          separatorLength,
        );
        setVerifyNumber(formattedValue);
      }

      if (
        pressedKey === 'Backspace' &&
        verificationRefs.second.current &&
        R.isEmpty(thirtyNumber)
      ) {
        verificationRefs.second.current.focus();
      }

      if (
        pressedKey !== 'Backspace' &&
        thirtyNumber.length === 1 &&
        verificationRefs.fourth.current
      ) {
        verificationRefs.fourth.current.focus();
      }
    };

    /**
     * Fourth input key press
     */
    const onKeyFourthInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 2 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxVerifyLength,
          separatorLength,
        );
        setVerifyNumber(formattedValue);
      }

      if (
        pressedKey === 'Backspace' &&
        verificationRefs.thirty.current &&
        R.isEmpty(fourthNumber)
      ) {
        verificationRefs.thirty.current.focus();
      }
    };

    return {
      verificationRefs,
      disabled,
      firstNumber,
      secondNumber,
      thirtyNumber,
      fourthNumber,
      firstOnChangeHandler,
      secondOnChangeHandler,
      thirtyOnChangeHandler,
      fourthOnChangeHandler,
      onKeyFirstInputPressHandler,
      onKeySecondInputPressHandler,
      onKeyThirtyInputPressHandler,
      onKeyFourthInputPressHandler,
    };
  }, [
    disabled,
    verificationRefs,
    verifyNumber,
    firstNumber,
    secondNumber,
    thirtyNumber,
    fourthNumber,
  ]);
};

export default useVerification;
