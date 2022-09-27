let arr = ['| ', '/ ', '- ', '\\ ', '| ', '/ ', '- ', '\\ ', '|'];
let delay = 0;
for (let i = 0; i <= arr.length; i++) {
  if (i !== arr.length) {
    setTimeout(() => {
      process.stdout.write("\r" + arr[i]);
    }, delay);
    delay += 300;
  } else {
    setTimeout(() => {
      process.stdout.write("\n");
    }, delay);
    delay += 50;
  }
}