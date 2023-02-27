import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
  console.log(props.tweet)
  let {user, timestamp, message} = props.tweet
  return (
    <div className="tweet">
    <ProfileImage image={user.image} />

    <div className="body">
      
      <div className="top">
        <User userData={user} />
        <Timestamp time={timestamp} />
      </div>

      <Message message={message} />
      <Actions /> 
      
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
  );
}

export default Tweet;
