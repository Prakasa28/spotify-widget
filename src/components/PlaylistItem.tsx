import { Playlist } from "../types";
import Card from "./Card";

interface PlaylistItemProps {
  playlist: Playlist;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: any;
}

function PlaylistItem({ playlist, handleClick = () => {} }: PlaylistItemProps) {
  return (
    <Card
      imageURL={playlist.images[0]?.url || ""}
      title={playlist.name}
      description={playlist.owner.display_name}
      handleClick={handleClick}
    />
  );
}

export default PlaylistItem;
