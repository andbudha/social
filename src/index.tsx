import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//post data
export type PostsType = {
    posts: Array<MyPostsType>
}

type MyPostsType = {
    id: number
    message: string
    likeCount: number
}


let posts = [
    {id: 1, message: 'Hi...', likeCount: 25},
    {id: 2, message: 'How are you?', likeCount: 52}
]

//dialogue data
export type DialoguesDataType = {
    dialoguesData: Array<DialogueType>
}

type DialogueType = {
    id: number
    name: string
}

let dialoguesData = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Delia'},
    {id: 3, name: 'Natalia'},
    {id: 4, name: 'Dorian'}
]

//message data

export type MessageDataType = {
    messageData: Array<MessageType>
}

type MessageType = {
    id: number
    message: string
}

let messageData = [
    {id: 1, message: 'Hi...'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Are you free today?'}
]

//main component
ReactDOM.render(
    <App
        posts={posts}
        dialoguesData={dialoguesData}
        messageData={messageData}
    />,
  document.getElementById('root')
);