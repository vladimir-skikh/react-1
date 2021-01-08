let initialState = {
    followData: [
        {
            id: 1,
            name: "Diana Amber",
            avatar: "https://themified.com/friend-finder/images/users/user-11.jpg",
        },
        {
            id: 2,
            name: "Cris Haris",
            avatar: "https://themified.com/friend-finder/images/users/user-12.jpg",
        },
        {
            id: 3,
            name: "Brian Walton",
            avatar: "https://themified.com/friend-finder/images/users/user-13.jpg",
        },
    ],
}

const followReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    return stateCopy;
}

export default followReducer;