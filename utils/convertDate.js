export default function convertDate(dateSTR) {
  const timestamp = dateSTR;

  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Define an array for month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, month, and year components
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Create the formatted date string
  const formattedDate = day + " " + month + " " + year;

  return formattedDate;
}
