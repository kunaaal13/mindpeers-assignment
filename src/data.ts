// It is a 24-hour clock component which has to be built using react or any package if required. The below image shows the daily time spent by a user in any app in the most active hours. Purple color shows active hours and the grey is for inactive hours.
// 0 , 1, 2, 3, ... 23
// active hours in a day for a user -> 8-12, 14-18, 20-22 -> value = 1 else 0
const data = [
  0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0,
]

// loop over the data and create an array of objects with the below structure:
// label -> Time in 24-hour format, id -> 0-23, value -> 0 or 1
export function getData() {
  const hours: {
    label: string
    id: number
    value: number
    color: string
  }[] = []
  for (let i = 0; i < 24; i++) {
    hours.push({
      label: `${i}`,
      id: i,
      value: 1, // for equal distribution in the chart
      color: data[i] ? '#E0E0E0' : '#6C63FF',
    })
  }
  return hours
}

// Explain approach to solve the problem
// 1. Create a data array with 24 items with value 1 or 0 each representing an hour in a day and 1 for active hours and 0 for inactive hours
// 2. Loop over the data array and create an array of objects with the below structure:
// label -> Time in 24-hour format, id -> 0-23, value -> 1 and color -> #E0E0E0 or #6C63FF based on what is the value in the data array
// 3. Use the above array to render the chart
