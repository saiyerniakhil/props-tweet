import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment' 
import PropTypes from 'prop-types';

var testTweet = {
    message: "Something about cars",
    gravatar: 'nothing',
    author: {
        handle: 'catperson',
        name: 'I am a car person'
    },
    likes: 2,
    retweets: 4,
    timestamp: "2019-05-2 21:24:37"
}

function Tweet({ tweet }) {
    return(
            
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
            <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
            </div>
        </div>
        
    )
}

Tweet.propTypes = {
    tweet : PropTypes.object
}

function Comment({ author, message, likes }) {
    return (
        <div>
            <div className="author">{author}</div>
            <div className="message">{message}</div>
            <div className="likes">{likes>0?likes:'No'} Likes 
            </div>
        </div>

    )
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string,
    likes: PropTypes.number
}

function Avatar({hash}) {
    var url = `https://gravatar.com.avatar/${hash}`
    return(
        <img src={url}
        className='avatar'
        alt='Avatar' />    
    
    )
        
}

Avatar.propTypes = {
    hash: PropTypes.string
}

function Message({ text }) {
    return(
        <div className='message'>
        {text}
        </div>    
    ) 
}

function NameWithHandle({author}) {
    const {name,handle} = author;
    return(
        <span className='name-with-handle'>
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>   
    )
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}

function getRetweetCount(count) {
    if(count>0) {
        return(
            <span className="retweet-count"> 
                {count} 
            </span>
        )
    } else {
        return null
    }
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow(); 
    return(
    <span className='time'>{timeString}</span>
    )
}

const ReplyButton = () => (
    <i className='fa fa-reply reply-button'></i>
)

const RetweetButton = ({count}) => (
    <span className="retweet-button">
        <i className='fa fa-retweet'></i> 
        {getRetweetCount(count)}
    </span>
)

RetweetButton.propTypes = {
    count: PropTypes.number
}

const LikeButton = ({count}) => (
    <span className="like-button">   
    <i className='fa fa-heart'></i>
    {count > 0 && <span className='like-count'> {count} </span>}
    </span>
)

LikeButton.propTypes = {
    count: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className='fa fa-ellipsis-h moreoptions-button'></i>
)


ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
)
