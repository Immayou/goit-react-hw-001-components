import { BoxItem, Image, FriendName, IsOnlineSymbol } from "./FriendList.styled";

export const FriendListItem = ({name, avatar, isOnline}) => {
<BoxItem>
        <IsOnlineSymbol active={isOnline}></IsOnlineSymbol>
        <Image src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </BoxItem>
}

