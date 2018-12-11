import React from 'react';

function GithubUser(props) {
  const { user } = props;
  if (!user.total_count) {
    return null;
  }
  return (
    <div>
      <h3>Github用户信息</h3>
      <ul>
        <li>姓名：{user.items[0].login}</li>
      </ul>
    </div>
  );
}

GithubUser.defaultProps = {
  user: {},
};

export default GithubUser;
