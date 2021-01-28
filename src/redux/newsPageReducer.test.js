import newsReducer, { addPostActionCreator, deletePostActionCreator } from "./newsPageReducer";
let state = {
    postsData: [
        {
            id: 1,
            postText:
                "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto:
                "https://themified.com/friend-finder/images/post-images/1.jpg",
            authorAvatar:
                "https://themified.com/friend-finder/images/users/user-5.jpg",
            authorName: "Alexis Clark",
        },
        {
            id: 2,
            postText:
                "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto:
                "https://themified.com/friend-finder/images/post-images/2.jpg",
            authorAvatar:
                "https://themified.com/friend-finder/images/users/user-3.jpg",
            authorName: "Linda Lohan",
        },
        {
            id: 3,
            postText:
                "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto:
                "https://themified.com/friend-finder/images/post-images/11.jpg",
            authorAvatar:
                "https://themified.com/friend-finder/images/users/user-4.jpg",
            authorName: "John Doe",
        },
    ],
    newPostText: "Write what you wish",
};

test("Lenght of posts should be encriment", () => {
    // 1 - test data
    let action = addPostActionCreator("Unit test text");
    
    // 2 - action
    let newState = newsReducer(state, action);

    // 3 -expectation
    expect(newState.postsData.length).toBe(4);
});

test("Lenght of posts should be decrement after delete", () => {
    // 1 - test data
    let action = deletePostActionCreator(1);
    
    // 2 - action
    let newState = newsReducer(state, action);

    // 3 -expectation
    expect(newState.postsData.length).toBe(2);
});
