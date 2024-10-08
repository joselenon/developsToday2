import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import blankAvatar from '../../assets/user/blankavatar.jpg';

const UserAvatarElementContainer = styled.div<{ $sizeInPx?: number }>`
  width: ${({ $sizeInPx }) => `${$sizeInPx ? `${$sizeInPx}px` : '100%'}`};
  display: flex;

  img {
    width: 100%;
    height: 100%;
    min-width: ${({ $sizeInPx }) => `${$sizeInPx ? `${$sizeInPx}px` : '100%'}`};
    max-width: ${({ $sizeInPx }) => `${$sizeInPx ? `${$sizeInPx}px` : '100%'}`};
    border-radius: 6px;
  }
`;

interface IUserAvatarProps {
  userInfo: { username?: string; url?: string };
  clickable?: boolean;
  sizeInPx?: number;
}

export default function UserAvatar({ userInfo, clickable = false, sizeInPx }: IUserAvatarProps) {
  const { url, username } = userInfo;

  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [url]);

  const avatarImage = error ? (
    <img src={blankAvatar} alt="app default user avatar" onError={() => setError(true)} />
  ) : (
    <img src={url} alt={`app user avatar ${url}`} onError={handleImageError} />
  );

  return clickable ? (
    <Link to={`/profile/${username}`}>
      <UserAvatarElementContainer $sizeInPx={sizeInPx}>{avatarImage}</UserAvatarElementContainer>
    </Link>
  ) : (
    <UserAvatarElementContainer $sizeInPx={sizeInPx}>{avatarImage}</UserAvatarElementContainer>
  );
}
