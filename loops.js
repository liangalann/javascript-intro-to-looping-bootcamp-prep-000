function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1){
  array.push(`I am ${i} strange loop.`)
} else {
  array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(number) {
  let countdown = number;

  if (countdown !== 0){
    while (countdown > 0) {
      console.log(--countdown)

    }
    return "done"
  }

}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}

do {

  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
  return
}
