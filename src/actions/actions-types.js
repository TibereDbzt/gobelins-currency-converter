import { ADD_CONVERSION, EMPTY_HISTORY } from '../constants/actions';

export const addConversion = payload => ({type: ADD_CONVERSION, payload});
export const emptyHistory = () => ({type: EMPTY_HISTORY});
