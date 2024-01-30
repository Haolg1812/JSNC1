// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Hàm getCode trích xuất mã sân bay từ một chuỗi
// const getCode = str => str.slice(0, 3).toUpperCase();

// // Phân tách thông tin chuyến bay từ chuỗi và in ra định dạng
// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
  
//   // Tạo đầu ra định dạng với biểu tượng Ð và sắp xếp thẻ từ trái sang phải
//   const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);

//   // In ra kết quả
//   console.log(output);
// }
//Tối ưu hơn:v
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

// Tạo mảng mới sử dụng map
const formattedFlights = flights.split('+').map(flight => {
  const [type, from, to, time] = flight.split(';');
  const delayIcon = type.startsWith('_Delayed') ? '�' : '';
  
  // Sử dụng chuỗi template để tạo chuỗi đầu ra
  return `${delayIcon}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
});

// In ra kết quả
console.log(formattedFlights.join('\n'));

