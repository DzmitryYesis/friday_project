import { AxiosError } from 'axios';

import { loginAPI } from 'api';
import { StatusCode } from 'enum';
import { initializeMeAC, setErrorMessageAC, setIsLoginAC } from 'store/actions';
import { AppThunkType } from 'types';

export const initializeMeTC = (): AppThunkType => async dispatch => {
  try {
    const { status } = await loginAPI.isLogin();

    if (status === StatusCode.Success) {
      dispatch(setIsLoginAC(true));
    }
  } catch (errorCatch) {
    const { response, message } = errorCatch as AxiosError;
    const error = response?.data.error;
    const status = response?.status;

    if (status === StatusCode.Unauthorized) {
      dispatch(setErrorMessageAC(error));
    } else {
      dispatch(setErrorMessageAC(message));
    }
  } finally {
    dispatch(initializeMeAC(true));
  }
};
