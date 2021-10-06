const saveInput = (val) => {
  console.log(val);
};

function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const handleInput = debounce((e) => saveInput(e.target.value));

const inputBox = document.getElementById("debounce-input");
inputBox.addEventListener("keyup", handleInput);
