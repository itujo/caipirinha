const dateSelectParser = (d: string) => {
  const [year, month, day] = d.split('-').map((e) => parseInt(e, 10));

  const date = new Date(year!, month! - 1, day);
  return date;
};

export { dateSelectParser };
