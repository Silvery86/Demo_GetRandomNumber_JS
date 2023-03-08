function generateArray() {
    const numInput = document.getElementById("num");
    const num = parseInt(numInput.value);
    if (isNaN(num) || num < 1) {
      alert("Please enter a valid number greater than 0.");
      numInput.value = "";
      return;
    }
    const arr = Array.from({length: num}, () => (Math.random() * 100));
    const stringarr = arr.map(n => Math.floor(n)).join(", ")
    const output = document.getElementById("result");
    output.textContent = "Result: [" + stringarr + "]";
  }