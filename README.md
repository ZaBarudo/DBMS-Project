# DBMS-Project

This is a **MERN (MongoDB, Express, NodeJS, ReactJS)** Stack Application.

This app contains several features:
- Login & Sign Up forms
- Fetching datas from The Movie Database website
- Searching and filtering any film by year or genre
- Trailer videos embedded
- Liking, commenting and selecting favorite films options for registered users only

Schemas of the models we've used:
- Comment
  - writer
  - postId
  - responseTo
  - content
  - date
- Dislike
  - userId
  - commentId
  - videoId
- Favorite
  - userFrom
  - movieId
  - movieTitle
  - moviePost
  - movieRunTime
- Like
  - userId
  - commentId
  - videoId
- User
  - username
  - email
  - password
  - firstName
  - lastName
  - role
  - image
  - token
  - tokenConf
  - token_mail
  - tokenExp
  - id_42
  - id_discord
  - id_github


