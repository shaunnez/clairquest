import AudioPlayer from "../AudioPlayer";

export default function AudioPlayerExample() {
  return <AudioPlayer onPlayStateChange={(playing) => console.log("Music playing:", playing)} />;
}
