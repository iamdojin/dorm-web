import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { PostPage } from "./PostPage";
import { CommentPage } from "./CommentPage";
import { ChatRoom } from "./ChatRoom";
import { JoinRoom } from "./JoinRoom";
import { NoticePage } from "./NoticePage";

export const Router = () => {
  return (
    <Switch>
      <Route path="/notice" component={NoticePage} />
      <Route path="/join" component={JoinRoom} />
      <Route path="/chat" component={ChatRoom} />
      <Route path="/comment" component={CommentPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
