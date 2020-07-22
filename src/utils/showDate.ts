export default function showDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();

  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${date.getFullYear()}`;
}
