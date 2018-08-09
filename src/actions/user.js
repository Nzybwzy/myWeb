import * as types from '../constants/ActionTypes';

const {USER} = types;

export const saveUserInfo = (info) => {
    return {
        type   : `${USER.ROOT}/${USER.SAVE_USERINFO}`,
        payload: info
    };
};