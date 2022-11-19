import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}

export type DialogueType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

type MessagePageType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}

type ProfilePageType = {
    posts: Array<PostType>
}

 export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi...', likeCount: 25},
            {id: 2, message: 'How are you?', likeCount: 52}
        ]
    }
    ,
    messagePage: {
        dialogues: [
            {id: 1, name: 'Andrei'},
            {id: 2, name: 'Delia'},
            {id: 3, name: 'Natalia'},
            {id: 4, name: 'Dorian'}
        ],
        messages: [
            {id: 1, message: 'Hi...'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Are you free today?'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    debugger
    const newPost: PostType = {
        id: 5,
        message: postMessage,
        likeCount: 13
    };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;
