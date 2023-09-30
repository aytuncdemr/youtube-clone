export default function convertTime(duration) {
  const match = duration.match(/PT(\d+)M(\d+)S/);
  if (match) {
    const minutes = parseInt(match[1]);
    const seconds = parseInt(match[2]);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
  return duration;
}
