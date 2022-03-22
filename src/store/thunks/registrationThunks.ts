import { AxiosError } from 'axios';

import { registrationApi } from 'api';
import { statusCode } from 'enum';
import {
  setErrorMessageAC,
  setRegistrationIsCompletedAC,
  setStatusAC,
} from 'store/actions';
import { AppThunkType } from 'types';

export const registrationTC =
  (email: string, password: string): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setStatusAC('loading'));

      const { status } = await registrationApi.registration({ email, password });

      if (status === statusCode.created) {
        dispatch(setRegistrationIsCompletedAC(true));
      }
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessageAC(error));
      } else {
        dispatch(setErrorMessageAC(message));
      }
    } finally {
      dispatch(setStatusAC('completed'));
    }
  };
