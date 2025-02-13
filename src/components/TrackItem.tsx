import { Track } from "../types";
import Card from "./Card";

interface TrackItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  track: Track | any;
}

function TrackItem({ track }: TrackItemProps) {
  return (
    <Card
      key={track.id}
      title={track.name}
      imageURL={track.album.images[0]?.url || ""}
      description={track.artists
        .map((a: { name: string }) => a.name)
        .join(", ")}
    />
  );
}

export default TrackItem;
