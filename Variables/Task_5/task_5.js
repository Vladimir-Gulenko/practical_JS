'use strict';

// Есть 3 переменные в которых хранится размер составляющих блочной модели в формате Npx, где N это целое число.
// Используя эти переменные, запишите в переменную totalWidth общую ширину блока в формате Npx.

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

const totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + "px";

console.log(totalWidth);

// '125px' - результат;