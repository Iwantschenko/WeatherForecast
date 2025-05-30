export const getDayOfWeek = (dateString: string) => {
  const day = new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return day.toUpperCase();
};
