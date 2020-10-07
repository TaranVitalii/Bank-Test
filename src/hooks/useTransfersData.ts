import * as R from 'ramda';
import {useMemo, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

const useTransfersData = () => {
  const [moneyInputValue, setMoneyInputValue] = useState<number>(0);
  const [isPayCompensation, setPayCompensation] = useState<boolean>(false);

  return useMemo(() => {
    /**
     * On change handler
     */
    const onChangeCashHandler = (
      e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
      const textValue: string = e.nativeEvent.text;
      const formattedValue = R.match(/[0-9]/g, textValue).join('');

      setMoneyInputValue(Number(formattedValue));
    };

    /**
     * Handler for pay compensation enabled
     */
    const isPayCompensationHandler = () => {
      setPayCompensation((previousState: boolean) => !previousState);
    };

    /**
     * Reset input value handler
     */
    const resetInputValueHandler = () => {
      setMoneyInputValue(0);
      setPayCompensation(false);
    };

    return {
      onChangeCashHandler,
      isPayCompensationHandler,
      moneyInputValue,
      resetInputValueHandler,
      isPayCompensation,
    };
  }, [moneyInputValue, isPayCompensation]);
};

export default useTransfersData;
