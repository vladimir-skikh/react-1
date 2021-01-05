let state = {
    newsPage: {
        postsData: [
            {
                postText: "Post 1",
                postPhoto: "https://themified.com/friend-finder/images/post-images/1.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-5.jpg",
                authorName: "Alexis Clark",
            },
            {
                postText: "Post 2",
                postPhoto: "https://themified.com/friend-finder/images/post-images/2.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-3.jpg",
                authorName: "Linda Lohan",
            },
            {
                postText: "Post 3",
                postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                authorName: "John Doe",
            },
        ],
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
}

export default state;