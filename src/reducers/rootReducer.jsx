const initState = {
  posts: [
    { id: "1", title: "prvi naslov", body: "prvi body" },
    { id: "2", title: "drugi naslov", body: "drugi body" },
    { id: "3", title: "treci naslov", body: "treci body" }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
