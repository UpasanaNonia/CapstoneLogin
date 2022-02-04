import { RiSettings3Line } from 'react-icons/ri';

import { useAuth } from '../contexts/AuthContext';

import {
  BannerContainer,
  ProfileImage,
  ProfileDetails,
  ProfileMeta,
  Activity,
  DisplayName,
  EditButton,
  Username,
  ActivityNumber,
  ActivityText,
} from '../styles/profile';

import blankProfile from '../images/BlankImage.jpg';

function ProfileBanner() {
  const { currentUser } = useAuth();

  return (
    <BannerContainer>
      <ProfileImage src={blankProfile} alt="profile" />
      <ProfileDetails>
        <ProfileMeta>
          <Username>{currentUser.displayName}</Username>
          <EditButton>Edit Profile</EditButton>
          <RiSettings3Line cursor="pointer" fontSize="1.5rem" />
        </ProfileMeta>
        <Activity>
          <ActivityText>
            <ActivityNumber>0</ActivityNumber> POSTS
          </ActivityText>
          <ActivityText>
            <ActivityNumber>26</ActivityNumber> BUDDIES
          </ActivityText>
          <ActivityText>
            <ActivityNumber>150</ActivityNumber> REQUESTS
          </ActivityText>
        </Activity>
        {/* <DisplayName></DisplayName> */}
      </ProfileDetails>
    </BannerContainer>
  );
}

export default ProfileBanner;
