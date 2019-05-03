import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return(
        <div className='tweet'>
            <Avatar/>
            <div className="content">
            <NameWithHandle/><Time/>
            <Message/>
            <div className="buttons">
                <ReplyButton/>
                <LikeButton/>
                <RetweetButton/>
                <MoreOptionsButton/>
            </div>
            </div>
        </div>
    )
}

function Avatar() {
    return(
        <img src='https://gravatar.com/avatar/nothing'
        className='avatar'
        alt='Avatar' />    
    
    )
        
}

function Message() {
    return(
        <div className='message'>
        This is less than 140 characters
        </div>    
    ) 
}

function NameWithHandle() {
    return(
        <span className='name-with-handle'>
            <span className="name">Your Name</span>
            <span className="handle">@YourHandle</span>
        </span>   
    )
}

const Time = () => (
    <span className='time'>3h Ago</span>
)

const ReplyButton = () => (
    <i className='fa fa-reply reply-button'></i>
)

const RetweetButton = () => (
    <i className='fa fa-retweet retweet-button'></i>
)

const LikeButton = () => (
    <i className='fa fa-heart like-button'></i>
)

const MoreOptionsButton = () => (
    <i className='fa fa-ellipsis-h moreoptions-button'></i>
)

ReactDOM.render(
    <Tweet/>,
    document.getElementById('root')
)
