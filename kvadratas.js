let n = 10;

for (let i = 0; i < n; i++) {
  for (let ii = 0; ii < n; ii++) {
    if (i === ii || i + ii === n) {
      document.write('<span style="color: red">*<span>');
    } else {
      document.write("<span>*<span>");
    }
  }
  document.write("<br>");
}
