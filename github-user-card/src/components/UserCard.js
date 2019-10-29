import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = props => {
  return (
    <Card className="user-card">
      <Card.Content>
        <Image src={props.user.avatar_url} />
        <Card.Header>{props.user.name}</Card.Header>
        <p>Followers: {props.followers.length}</p>
        {props.followers.map(follower => (
          <Card.Description key={follower.id}>
            {follower.login}
          </Card.Description>
        ))}
      </Card.Content>
    </Card>
  );
};

export default UserCard;
