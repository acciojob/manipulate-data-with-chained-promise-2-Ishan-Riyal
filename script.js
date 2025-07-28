//your JS code here. If required.
function manipulateArray() {
  // Step 1: Initial promise that resolves with [1, 2, 3, 4] after 3 seconds
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    })
      // Step 2: Filter out odd numbers after 1 second
      .then((data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = data.filter((num) => num % 2 === 0);
            document.getElementById("output").textContent =
              evenNumbers.join(",");
            resolve(evenNumbers);
          }, 1000);
        });
      })
      // Step 3: Multiply even numbers by 2 after another 2 seconds
      .then((evenNumbers) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evenNumbers.map((num) => num * 2);
            document.getElementById("output").textContent = doubled.join(",");
            resolve(doubled);
          }, 2000);
        });
      })
  );
}

// Call the function on page load
manipulateArray();
