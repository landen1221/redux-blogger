const state_example = {
  posts: {
    post1: {
      title: "Blog Title",
      description: "Blog Subtitle",
      body: "I'm whatever this person wrote about",
    },
    post2: {
      title: "Blog Title",
      description: "Blog Subtitle",
      body: "I'm whatever this person wrote about",
    },
  },
  comments: {
    commentID1: {
      text: "This is post comment",
      postID: "post1",
    },
  },
};

const INITIAL_STATE = {
  posts: {},
  comments: {},
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // action.postID & action.newPost >>> postID: {title, description, body}
    case "ADD_POST":
      return {
        ...state,
        posts: { ...state.posts, [action.postID]: action.newPost },
      };
    
    // action.postID (to remove post)
    case "REMOVE_POST":
        const asArray = Object.entries(state)
        const removePost = asArray.filter(([key, value]) => key !== action.postID)
        const updatedObject = Object.fromEntries(removePost)

        return {...state, post:{updatedObject}}
  }
}
