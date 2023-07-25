CREATE TABLE user_table (
  user_id int GENERATED ALWAYS AS IDENTITY,
  PRIMARY KEY (user_id),
  username text NOT NULL,
  password text NOT NULL,
  email text NOT NULL,
)

CREATE TABLE posts_table (
post_id int GENERATED ALWAYS AS IDENTITY,
PRIMARY KEY (post_id),
job_title text NOT NULL,
salary int,
url text NOT NULL,
message text,
company_name text,
FOREIGN KEY (user_id) REFERENCES user_table(user_id),
)

CREATE TABLE job_languages (
  lang_id int GENERATED ALWAYS AS IDENTITY,
  PRIMARY KEY (lang_id),
  language_name
  FOREIGN KEY(post_id) REFERENCES posts_table(post_id), 
)

CREATE TABLE languages (

)