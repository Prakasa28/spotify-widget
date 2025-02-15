import { Track } from "../types";
import Card from "./Card";

interface TrackItemProps {
  track: Track;
}

function TrackItem({ track }: TrackItemProps) {
  const { name, album, artists } = track;
  const artistNames = artists.map((artist) => artist.name).join(", ");
  const imageURL = album.images[0]?.url || "";

  return <Card title={name} imageURL={imageURL} description={artistNames} />;
}

export default TrackItem;
