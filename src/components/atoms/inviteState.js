import { atom } from 'recoil';

// Atom
export const initialState = {
  userId: "",
  productId: "",
  customMessage: "",
  expireDate: "",
  exclusiveLink: "",
  image: {},
  };
export const inviteState = atom({
  key: 'inviteState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});