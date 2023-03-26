import React, { useEffect, useState } from "react";
import "./Github.css";
import githubPhoto from "../../../assets/github.png";

function Github() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://api.github.com/users/levaniakobidze");
      const userData = await res.json();
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  return (
    <div>
      {user && (
        <div className="user_card">
          <a href={user.html_url} target="_blank" className="img_link">
            <div className="user_img_cont">
              <img src={user.avatar_url} alt="" />
            </div>
          </a>
          <div className="info_cont">
            <div className="name_date">
              <h1 className="user_name">{user.name}</h1>
              <p className="date">joined at {user.created_at.substr(0, 10)}</p>
            </div>
            {/* <div className="nick">@{user.login}</div> */}
            <div className="bio-cont">
              {user.bio ? (
                <p className="bio">{user.bio}</p>
              ) : (
                <p className="bio">This profile has no bio</p>
              )}
            </div>
            <div className="repo_info">
              <div className="repos">
                <p>Repos</p> <span>{user.public_repos}</span>
              </div>
              <div className="followers">
                <p>Followers</p> <span>{user.followers}</span>
              </div>
              <div className="following">
                <p>Following</p> <span>{user.following}</span>
              </div>
            </div>
            <img src={githubPhoto} className="githubPhoto" alt="github" />
            <div className="additional_infos"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Github;
