const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

let initialState = {
    usersData: [
        {
            id: 1,
            userName: "Clark Daniel",
            following: true,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 2,
            userName: "Den Batis",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 3,
            userName: "Yuan Macstil",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 4,
            userName: "Dream Name",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SET_USERS: {

            let users = getUsers(action.lastUser);

            stateCopy = {
                ...state,
                usersData: [...state.usersData, ...users],
            };
            break;
        }
        case FOLLOW_USER: {
            stateCopy = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === parseInt(action.user_id)) {
                        let userCopy = {
                            ...user,
                            following: true,
                        };
                        return userCopy;
                    }
                    return user;
                }),
            };

            break;
        }
        case UNFOLLOW_USER: {
            stateCopy = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === parseInt(action.user_id)) {
                        let userCopy = {
                            ...user,
                            following: false,
                        };
                        return userCopy;
                    }
                    return user;
                }),
            };

            break;
        }
        default: {
            stateCopy = { ...state };
            break;
        }
    }

    return stateCopy;
};

const getUsers = (lastUser) => {
    let usersData = [
        {
            id: 1,
            userName: "Clark Daniel",
            following: true,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 2,
            userName: "Den Batis",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 3,
            userName: "Yuan Macstil",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 4,
            userName: "Dream Name",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
        {
            id: 5,
            userName: "Dream Name",
            following: false,
            avatar:
                "https://themified.com/friend-finder/images/users/user-11.jpg",
            status: "some status",
            country: "Russia",
            city: "Voronezh",
        },
    ];
    return usersData;
}
export const followActionCreator = (user_id) => {
    let action = {
        type: FOLLOW_USER,
        user_id: user_id,
    };
    return action;
};

export const unfollowActionCreator = (user_id) => {
    let action = {
        type: UNFOLLOW_USER,
        user_id: user_id,
    };
    return action;
};

export const setUsersActionCreator = (lastUser) => {
    let action = {
        type: SET_USERS,
        lastUser: lastUser,
    };
    return action;
};

export default usersReducer;
