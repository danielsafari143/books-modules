import { DateTime } from '../node_modules/luxon/src/luxon.js';

const dates = () => {
  const saha = DateTime.now();
  const formats = `${saha.monthLong} ${saha.day} ${saha.year} / ${saha.hour}:${saha.minute}:${saha.second} `;
  document.getElementById('currentDate').innerHTML = formats;
}

export default dates;