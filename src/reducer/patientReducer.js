function patientReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((patient) =>
        patient.id === action.payload.id ? action.payload : patient
      );

    case "DELETE":
      return state.filter((patient) => patient.id !== action.payload);

    default:
      return state;
  }
}

export default patientReducer;