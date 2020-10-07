import {Machine, assign} from 'xstate';

import {machineActions} from '../models';

const initialContext = {
  firstNumberPart: '',
  secondNumberPart: '',
  thirtyNumberPart: '',
  fourthNumberPart: '',
  currentCashValue: 200000,
  cash: 0,
};

const bankMachine = Machine<any>({
  id: 'moneyTransfers',
  initial: machineActions.ENTER_CARD_NUMBER,
  context: initialContext,
  states: {
    ENTER_CARD_NUMBER: {},
    ENTER_CASH: {
      on: {
        BACK_TO_ENTER_CARD: {
          target: machineActions.ENTER_CARD_NUMBER,
        },
      },
    },
    CONFIRMATION_TRANSACTION: {
      on: {
        BACK_TO_ENTER_CASH: {
          target: machineActions.ENTER_CASH,
        },
      },
    },
    SUCCESS_TRANSFER: {
      on: {
        BACK_TO_ENTER_CARD_NUMBER: {
          target: machineActions.ENTER_CARD_NUMBER,
        },
      },
    },
  },
  on: {
    TO_CONFIRMATION_TRANSACTION: {
      target: machineActions.CONFIRMATION_TRANSACTION,
      actions: assign({
        cash: (context: any, event: any) => event.cash,
      }),
    },
    TO_ENTER_CASH: {
      target: machineActions.ENTER_CASH,
      actions: assign({
        firstNumberPart: (context: any, event: any) => event.firstNumberPart,
        secondNumberPart: (context: any, event: any) => event.secondNumberPart,
        thirtyNumberPart: (context: any, event: any) => event.thirtyNumberPart,
        fourthNumberPart: (context: any, event: any) => event.fourthNumberPart,
      }),
    },
    TO_SUCCESS_TRANSFER: {
      target: machineActions.SUCCESS_TRANSFER,
    },
    TO_ENTER_CARD_NUMBER: {
      target: machineActions.ENTER_CARD_NUMBER,
      actions: assign({
        firstNumberPart: '',
        secondNumberPart: '',
        thirtyNumberPart: '',
        fourthNumberPart: '',
        currentCashValue: (context: any) => context.cash,
        cash: 0,
      }),
    },
  },
});

export default bankMachine;
