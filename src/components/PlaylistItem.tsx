import { Playlist } from "../types";
import Card from "./Card";

interface PlaylistItemProps {
  playlist: Playlist;
  handleClick?: () => void;
}

function PlaylistItem({ playlist, handleClick = () => {} }: PlaylistItemProps) {
  const { name, owner, images } = playlist;
  const imageURL = images[0]?.url || "";
  const ownerName = owner.display_name;

  return (
    <Card
      imageURL={imageURL}
      title={name}
      description={ownerName}
      handleClick={handleClick}
    />
  );
}

export default PlaylistItem;
