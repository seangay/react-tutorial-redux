const initState = {
  posts: [
    {
      id: "1", title: "Eat my shorts", body: "Lorem ipsum dolor sit amet," +
        " consectetur" +
        " adipisicing elit. Impedit nesciunt nulla officia perspiciatis quam recusandae repellendus repudiandae unde. Assumenda doloribus incidunt ipsa nobis numquam qui quod repudiandae sit ullam voluptate?"
    },
    {
      id: "2", title: "Another one", body: "Lorem ipsum dolor sit amet," +
        " consectetur" +
        " adipisicing elit. Impedit nesciunt nulla officia perspiciatis quam recusandae repellendus repudiandae unde. Assumenda doloribus incidunt ipsa nobis numquam qui quod repudiandae sit ullam voluptate?"
    },
    {
      id: "3",
      title: "SOmething else",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nesciunt nulla officia perspiciatis quam recusandae repellendus repudiandae unde. Assumenda doloribus incidunt ipsa nobis numquam qui quod repudiandae sit ullam voluptate?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
