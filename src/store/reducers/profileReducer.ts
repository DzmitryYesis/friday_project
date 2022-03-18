import { ProfileActionType } from 'store/actions';
import { AuthMeType } from 'types';

export type ProfileStateWithErrorKeyType = {
  profileData: AuthMeType;
  error: string;
  needEdit: boolean;
};

const initialState: ProfileStateWithErrorKeyType = {
  profileData: {} as AuthMeType,
  error: '',
  needEdit: false,
};

export const ProfileReducer = (
  state = initialState,
  action: ProfileActionType,
): ProfileStateWithErrorKeyType => {
  switch (action.type) {
    case 'profile/check-auth': {
      return { ...state, profileData: action.payload.state };
    }
    case 'profile/change-personal-data': {
      return { ...state, needEdit: action.payload.needEdit };
    }
    case 'profile/change-name': {
      return {
        ...state,
        profileData: { ...state.profileData, name: action.payload.name },
      };
    }
    case 'profile/change-avatar': {
      return {
        ...state,
        profileData: { ...state.profileData, avatar: action.payload.avatar },
      };
    }
    default:
      return state;
  }
};
