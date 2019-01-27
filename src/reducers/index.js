export default (state, action) => {
  switch (action.type) {
    case "SET_NAME_9":
    return {
      ...state,
      name9: action.name9
    };
    case "SET_NUMBER_9":
    return {
      ...state,
      number9: action.number9
    };
    case "SET_NAME_10":
    return {
      ...state,
      name10: action.name10
    };
    case "SET_NUMBER_10":
    return {
      ...state,
      number10: action.number10
    };
    case "SET_NAME_11":
    return {
      ...state,
      name11: action.name11
    };
    case "SET_NUMBER_11":
    return {
      ...state,
      number11: action.number11
    };
    case "SET_NAME_12":
    return {
      ...state,
      name12: action.name12
    };
    case "SET_NUMBER_12":
    return {
      ...state,
      number12: action.number12
    };
    case "SET_NAME_1":
    return {
      ...state,
      name1: action.name1
    };
    case "SET_NUMBER_1":
    return {
      ...state,
      number1: action.number1
    };
    case "SET_NAME_2":
    return {
      ...state,
      name2: action.name2
    };
    case "SET_NUMBER_2":
    return {
      ...state,
      number2: action.number2
    };
    case "SET_NAME_3":
    return {
      ...state,
      name3: action.name3
    };
    case "SET_NUMBER_3":
    return {
      ...state,
      number3: action.number3
    };
    case "SET_NAME_4":
    return {
      ...state,
      name4: action.name4
    };
    case "SET_NUMBER_4":
    return {
      ...state,
      number4: action.number4
    };
    default:
    return state;
  }
};
