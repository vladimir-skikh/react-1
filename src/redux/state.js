let store = {
    _state: {
        newsPage: {
            postsData: [
                {
                    postText: "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
                    postPhoto: "https://themified.com/friend-finder/images/post-images/1.jpg",
                    authorAvatar: "https://themified.com/friend-finder/images/users/user-5.jpg",
                    authorName: "Alexis Clark",
                },
                {
                    postText: "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
                    postPhoto: "https://themified.com/friend-finder/images/post-images/2.jpg",
                    authorAvatar: "https://themified.com/friend-finder/images/users/user-3.jpg",
                    authorName: "Linda Lohan",
                },
                {
                    postText: "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
                    postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                    authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                    authorName: "John Doe",
                },
            ],
            newPostText: 'Write what you wish',
        },
        messagesPage: {
            dialogsData: [
                {
                    id: 2,
                    name: 'Linda Lohan',
                    avatar: 'https://themified.com/friend-finder/images/users/user-2.jpg',
                    lastMessage: 'Hi there, how are you',
                },
                {
                    id: 10,
                    name: 'Julia Cox',
                    avatar: 'https://themified.com/friend-finder/images/users/user-10.jpg',
                    lastMessage: 'see you soon',
                },
                {
                    id: 3,
                    name: 'Sophia Lee',
                    avatar: 'https://themified.com/friend-finder/images/users/user-3.jpg',
                    lastMessage: 'Hi there, how are you',
                }
            ],
            activeDialogMessagesData: [
                {
                    author: "other",
                    avatar: "https://themified.com/friend-finder/images/users/user-2.jpg",
                    message: "Hi honey, how are you doing???? Long time no see. Where have you been?",
                },
                {
                    author: "me",
                    avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
                    message: "I'm fine, thanks! What about you?",
                },
            ],
            newMessageText: 'My new message',
        },
        follow: {
            followData: [
                {
                    name: "Diana Amber",
                    avatar: "https://themified.com/friend-finder/images/users/user-11.jpg",
                },
                {
                    name: "Cris Haris",
                    avatar: "https://themified.com/friend-finder/images/users/user-12.jpg",
                },
                {
                    name: "Brian Walton",
                    avatar: "https://themified.com/friend-finder/images/users/user-13.jpg",
                },
            ],
        },
    },
    _renderReactDom() {},

    subscribe(observer) {
        this._renderReactDom = observer;
    },
    getState() {
        return this._state;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {

            let newPost = {
                postText: this._state.newsPage.newPostText,
                postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                authorName: "My name",
            };
            this._state.newsPage.postsData.push(newPost);
            this._state.newsPage.newPostText = '';
            this._renderReactDom(this._state);

        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {

            this._state.newsPage.newPostText = action.text;
            this._renderReactDom(this._state);

        } else if (action.type === 'ADD-NEW-MESSAGE') {

            let newMessage = {
                author: "me",
                avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.activeDialogMessagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._renderReactDom(this._state);

        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {

            this._state.messagesPage.newMessageText = action.text;
            this._renderReactDom(this._state);

        }
    },

}

export default store;