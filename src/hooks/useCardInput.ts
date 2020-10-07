import * as R from 'ramda';
import {useMemo, useRef, useState, useEffect} from 'react';
import {TextInput} from 'react-native';

import {NativeEventProps} from 'interfaces';
import {inputSeparator} from '../helpers';
import {maxCardLength, separatorCalc} from '../models';

const initialInputState = {1: '', 2: '', 3: '', 4: ''};

const useCardInput = () => {
  const inputsRef = {
    first: useRef<TextInput | null>(null),
    second: useRef<TextInput | null>(null),
    thirty: useRef<TextInput | null>(null),
    fourth: useRef<TextInput | null>(null),
  };
  const [disabled, setDisabled] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState(initialInputState);
  const firstNumberPart: string = R.propOr('', '1', cardNumber);
  const secondNumberPart: string = R.propOr('', '2', cardNumber);
  const thirtyNumberPart: string = R.propOr('', '3', cardNumber);
  const fourthNumberPart: string = R.propOr('', '4', cardNumber);

  useEffect(() => {
    if (
      firstNumberPart.length === 4 &&
      secondNumberPart.length === 4 &&
      thirtyNumberPart.length === 4 &&
      fourthNumberPart.length === 4
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    firstNumberPart.length,
    secondNumberPart.length,
    thirtyNumberPart.length,
    fourthNumberPart.length,
  ]);

  return useMemo(() => {
    /**
     * On Change handler for first input
     */
    const firstOnChangeHandler = (value: string) => {
      if (value.length <= 4) {
        setCardNumber({...cardNumber, 1: value});
      }

      if (value.length === 4) {
        if (inputsRef.second.current) {
          inputsRef.second.current.focus();
        }
      }
    };

    /**
     * On Change handler for second input
     */
    const secondOnChangeHandler = (value: string) => {
      if (value.length <= 4) {
        setCardNumber({...cardNumber, 2: value});
      }

      if (value.length === 4) {
        if (inputsRef.thirty.current) {
          inputsRef.thirty.current.focus();
        }
      }
    };

    /**
     * On Change handler for thirty input
     */
    const thirtyOnChangeHandler = (value: string) => {
      if (value.length <= 4) {
        setCardNumber({...cardNumber, 3: value});
      }

      if (value.length === 4) {
        if (inputsRef.fourth.current) {
          inputsRef.fourth.current.focus();
        }
      }
    };

    /**
     * On Change handler for fourth input
     */
    const fourthOnChangeHandler = (value: string) => {
      if (value.length <= 4) {
        setCardNumber({...cardNumber, 4: value});
      }
    };

    /**
     * First input key press
     */
    const onKeyFirstInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 4 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxCardLength,
          separatorCalc,
        );
        setCardNumber(formattedValue);
      }

      if (
        firstNumberPart.length === 4 &&
        inputsRef.second.current &&
        pressedKey !== 'Backspace'
      ) {
        inputsRef.second.current.focus();
      }
    };

    /**
     * Second input key press
     */
    const onKeySecondInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 4 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxCardLength,
          separatorCalc,
        );
        setCardNumber(formattedValue);
      }

      if (
        inputsRef.first.current &&
        pressedKey === 'Backspace' &&
        R.isEmpty(secondNumberPart)
      ) {
        inputsRef.first.current.focus();
      }

      if (
        pressedKey !== 'Backspace' &&
        secondNumberPart.length === 4 &&
        inputsRef.thirty.current
      ) {
        inputsRef.thirty.current.focus();
      }
    };

    /**
     * Thirty input key press
     */
    const onKeyThirtyInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 4 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxCardLength,
          separatorCalc,
        );
        setCardNumber(formattedValue);
      }

      if (
        pressedKey === 'Backspace' &&
        inputsRef.second.current &&
        R.isEmpty(thirtyNumberPart)
      ) {
        inputsRef.second.current.focus();
      }

      if (
        pressedKey !== 'Backspace' &&
        thirtyNumberPart.length === 4 &&
        inputsRef.fourth.current
      ) {
        inputsRef.fourth.current.focus();
      }
    };

    /**
     * Fourth input key press
     */
    const onKeyFourthInputPressHandler = (event: NativeEventProps) => {
      const pressedKey: any = R.pathOr(null, ['nativeEvent', 'key'], event);

      if (R.isNil(pressedKey)) return;

      if (pressedKey.length >= 4 && pressedKey !== 'Backspace') {
        const formattedValue = inputSeparator(
          pressedKey,
          maxCardLength,
          separatorCalc,
        );
        setCardNumber(formattedValue);
      }

      if (
        pressedKey === 'Backspace' &&
        inputsRef.thirty.current &&
        R.isEmpty(fourthNumberPart)
      ) {
        inputsRef.thirty.current.focus();
      }
    };

    /**
     * Reset Input Handler
     */
    const resetInputHandler = () => {
      setCardNumber(initialInputState);
    };

    return {
      inputsRef,
      disabled,
      firstNumberPart,
      secondNumberPart,
      thirtyNumberPart,
      fourthNumberPart,
      resetInputHandler,
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
    inputsRef,
    cardNumber,
    firstNumberPart,
    secondNumberPart,
    thirtyNumberPart,
    fourthNumberPart,
  ]);
};

export default useCardInput;
