const showDate: (date: Date) => string = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();

  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${date.getFullYear()}`;
};

export default showDate;
