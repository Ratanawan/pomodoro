export const formatTime = (duration: number) => {
  if (typeof duration != "number") return;

  const hour = Math.floor((duration / 3600) % 24);
  const minute = Math.floor((duration % 3600) / 60);
  const second = duration % 60;

  const result = [];

  hour && result.push(`${hour}`);

  result.push(`${minute}`.padStart(2, "0"));

  result.push(`${second}`.padStart(2, "0"));

  return result.join(" : ");
};
