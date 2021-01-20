import { types } from "../types/types";

const initialState = {
  providers: null,
  services: null,
  selectedService: null
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.services:
      return {
        ...state,
        services: {
          ...action.payload,
        },
      };

    case types.providers:
      return {
        ...state,
        providers: { ...action.payload },
      };

    case types.filter:
      return {
        ...state,
        selectedService: action.payload.serviceId
      }
    
    default:
      return state;
  }
};
