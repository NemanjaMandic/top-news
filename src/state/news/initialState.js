const initialState = () => ({
  topNews: {
    data: [],
    inProgress: false,
    error: "",
  },
  searchResult: {
    data: [],
    inProgress: false,
    error: "",
  },
  category: {
    general: {
      data: [],
      inProgress: false,
      error: "",
    },
    health: {
      data: [],
      inProgress: false,
      error: "",
    },
    science: {
      data: [],
      inProgress: false,
      error: "",
    },
    sports: {
      data: [],
      inProgress: false,
      error: "",
    },
    entertainment: {
      data: [],
      inProgress: false,
      error: "",
    },
    technology: {
      data: [],
      inProgress: false,
      error: "",
    },
  },
});

export default initialState;
