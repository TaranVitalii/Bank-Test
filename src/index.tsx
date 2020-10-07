import * as R from 'ramda';
import React, {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {Transition, Transitioning} from 'react-native-reanimated';
import {useMachine} from '@xstate/react';

import locale from './locale';
import {localeRoutes} from './models';
import Header from './components/Header';
import MainView from './components/MainView';
import BankCard from './components/BankCard';
import MoneyInput from './components/MoneyInput';
import Button from './components/Button';
import TransferCard from './components/TransferCard';
import CardInput from './components/CardInput';
import SwitchField from './components/SwitchField';
import TransferValue from './components/TransferValue';
import SecureField from './components/SecureField';
import VerifyField from './components/VerifyField';
import SuccessField from './components/SuccessField';
import useCardInput from './hooks/useCardInput';
import useTransfersData from './hooks/useTransfersData';
import bankMachine from './machine';

const mockData = {
  bankName: 'Golden Dream',
  endDate: '01/19',
  cardNumber: 'XXXX XXXX XXXX 2082',
};

const MoneyTransfers = () => {
  const [current, send] = useMachine(bankMachine);
  const enterNextCardTransition = useRef<any>(null);
  const enterBackCardTransition = useRef<any>(null);

  const transition = (
    <Transition.Sequence>
      <Transition.In type="slide-right" durationMs={1500} />
      <Transition.Change />
      <Transition.Out type="slide-left" durationMs={1500} />
    </Transition.Sequence>
  );

  const transitionBack = (
    <Transition.Sequence>
      <Transition.In type="slide-left" durationMs={1500} />
      <Transition.Change />
      <Transition.Out type="slide-right" durationMs={1500} />
    </Transition.Sequence>
  );

  const {
    inputsRef,
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
    disabled,
  } = useCardInput();

  const {
    onChangeCashHandler,
    isPayCompensationHandler,
    resetInputValueHandler,
    moneyInputValue,
    isPayCompensation,
  } = useTransfersData();

  /**
   * To Transfer data
   */
  const toEnterCashHandler = () => {
    send(localeRoutes.TO_ENTER_CASH, {
      firstNumberPart,
      secondNumberPart,
      thirtyNumberPart,
      fourthNumberPart,
    });
    enterNextCardTransition.current.animateNextTransition();
  };

  /*
   * To Confirmation handler
   */
  const toConfirmationTransactionHandler = () => {
    enterNextCardTransition.current.animateNextTransition();
    send(localeRoutes.TO_CONFIRMATION_TRANSACTION, {
      cash: moneyInputValue,
    });
  };

  /**
   * Back to enter card handler
   */
  const onBackEnterCardHandler = () => {
    enterBackCardTransition.current.animateNextTransition();
    send(localeRoutes.BACK_TO_ENTER_CARD);
  };

  /**
   * Back to enter cash handler
   */
  const onBackEnterCashHandler = () => {
    enterBackCardTransition.current.animateNextTransition();
    send(localeRoutes.BACK_TO_ENTER_CASH);
  };

  /**
   * Send Cash handler
   */
  const toCashSuccessHandler = () => {
    enterNextCardTransition.current.animateNextTransition();
    send(localeRoutes.TO_SUCCESS_TRANSFER);
  };

  /**
   * Enter card number showing
   */
  const toEnterCardHandler = () => {
    enterBackCardTransition.current.animateNextTransition();

    send(localeRoutes.TO_ENTER_CARD_NUMBER);
    resetInputHandler();
    resetInputValueHandler();
  };

  return (
    <Transitioning.View
      style={{flex: 1}}
      ref={enterBackCardTransition}
      transition={transitionBack}>
      <Transitioning.View
        style={{flex: 1}}
        ref={enterNextCardTransition}
        transition={transition}>
        {current.matches('ENTER_CARD_NUMBER') && (
          <MainView bgColor="white">
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
              style={{width: '100%', paddingHorizontal: 10}}>
              <Header title={locale.moneyTransfers} isBack />
            </LinearGradient>
            <KeyboardAwareScrollView extraScrollHeight={80} bounces={false}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
                style={{width: '100%', paddingHorizontal: 10}}>
                <BankCard
                  bankName={mockData.bankName}
                  endData={mockData.endDate}
                  money={R.pathOr(0, ['context', 'currentCashValue'], current)}
                  cardNumber={mockData.cardNumber}
                />
              </LinearGradient>
              <CardInput
                inputsRef={inputsRef}
                firstNumberPart={firstNumberPart}
                secondNumberPart={secondNumberPart}
                thirtyNumberPart={thirtyNumberPart}
                fourthNumberPart={fourthNumberPart}
                firstOnChangeHandler={firstOnChangeHandler}
                secondOnChangeHandler={secondOnChangeHandler}
                thirtyOnChangeHandler={thirtyOnChangeHandler}
                fourthOnChangeHandler={fourthOnChangeHandler}
                onKeyFirstInputPressHandler={onKeyFirstInputPressHandler}
                onKeySecondInputPressHandler={onKeySecondInputPressHandler}
                onKeyThirtyInputPressHandler={onKeyThirtyInputPressHandler}
                onKeyFourthInputPressHandler={onKeyFourthInputPressHandler}
              />
              <Button disabled={disabled} onPress={toEnterCashHandler} />
            </KeyboardAwareScrollView>
          </MainView>
        )}
        {current.matches('ENTER_CASH') && (
          <MainView bgColor={'white'}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
              style={{width: '100%', paddingHorizontal: 10}}>
              <Header
                title={locale.transferAmount}
                isBack
                onPress={onBackEnterCardHandler}
              />
            </LinearGradient>
            <KeyboardAwareScrollView extraScrollHeight={80} bounces={false}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
                style={{width: '100%', paddingHorizontal: 10}}>
                <BankCard
                  bankName={mockData.bankName}
                  endData={mockData.endDate}
                  money={R.pathOr(0, ['context', 'currentCashValue'], current)}
                  cardNumber={mockData.cardNumber}
                />
              </LinearGradient>
              <TransferCard
                firstNumberPart={firstNumberPart}
                secondNumberPart={secondNumberPart}
                thirtyNumberPart={thirtyNumberPart}
                fourthNumberPart={fourthNumberPart}
              />
              <MoneyInput
                value={moneyInputValue}
                onChange={onChangeCashHandler}
              />
              <SwitchField
                onValueChange={isPayCompensationHandler}
                value={isPayCompensation}
              />
              <Button
                disabled={!moneyInputValue && moneyInputValue === 0}
                onPress={toConfirmationTransactionHandler}
              />
            </KeyboardAwareScrollView>
          </MainView>
        )}
        {current.matches('CONFIRMATION_TRANSACTION') && (
          <MainView bgColor={'white'}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
              style={{width: '100%', paddingHorizontal: 10}}>
              <Header
                title={locale.secureTransferTitle}
                isBack
                onPress={onBackEnterCashHandler}
              />
            </LinearGradient>
            <KeyboardAwareScrollView extraScrollHeight={80} bounces={false}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
                style={{width: '100%', paddingHorizontal: 10}}>
                <TransferValue
                  cash={R.pathOr(0, ['context', 'cash'], current)}
                />
              </LinearGradient>
              <SecureField />
              <VerifyField onPress={toCashSuccessHandler} />
            </KeyboardAwareScrollView>
          </MainView>
        )}
        {current.matches('SUCCESS_TRANSFER') && (
          <MainView bgColor={'white'}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7BA7F3', '#5285DF', '#2B5EC9']}
              style={{width: '100%', paddingHorizontal: 10}}>
              <Header
                title={locale.result}
                isBack={false}
                onPress={toEnterCardHandler}
              />
            </LinearGradient>
            <SuccessField />
          </MainView>
        )}
      </Transitioning.View>
    </Transitioning.View>
  );
};

export default MoneyTransfers;
