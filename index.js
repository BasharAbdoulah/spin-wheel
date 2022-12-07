const box = document.getElementById("box");
const element = document.getElementById("mainbox");
const Wheel = document.getElementById("wheel");
const Layout = document.getElementById("layout");
const modal = document.getElementById("modal");
const okBtn = document.getElementById("ok-btn");
const congratsText = document.getElementById("congrats");
const stateText = document.getElementById("state");
const fedbackImg = document.getElementById("fedback-img");

const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const spin = () => {
  Wheel.play();
  let SelectedItem = false;

  let Item1 = shuffle([1890, 2250, 2610]);
  let Item2 = shuffle([1850, 2210, 2570]);
  let Item3 = shuffle([1770, 2130, 2490]);
  let Item4 = shuffle([1810, 2170, 2530]);
  let Item5 = shuffle([1750, 2110, 2470]);
  let Item6 = shuffle([1630, 1990, 2350]);
  let Item7 = shuffle([1570, 2930, 2290]);

  let results = shuffle([
    Item1[0],
    Item2[0],
    Item3[0],
    Item4[0],
    Item5[0],
    Item6[0],
    Item7[0],
  ]);

  //
  if (Item1.includes(results[0])) SelectedItem = true;
  if (Item2.includes(results[0])) SelectedItem = false;
  if (Item3.includes(results[0])) SelectedItem = false;
  if (Item4.includes(results[0])) SelectedItem = false;
  if (Item5.includes(results[0])) SelectedItem = false;
  if (Item6.includes(results[0])) SelectedItem = true;
  if (Item7.includes(results[0])) SelectedItem = false;

  box.style.setProperty("transition", "all ease 3.5s");
  box.style.transform = `rotate(${results[0]}deg)`;
  element.classList.remove("animate");

  setTimeout(() => {
    element.classList.add("animate");
  }, 3000);

  // Function will run at spin wheel stop
  setTimeout(() => {
    if (SelectedItem) {
      // if the result is true (winner)
      console.log(SelectedItem);
      Layout.style.display = "flex";
      congratsText.textContent = "Congratulations!";
      stateText.textContent = "You won.";
      stateText.style.display = "block";

      fedbackImg.src =
        "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
    } else {
      // if the result is false (loser)
      Layout.style.display = "flex";
      congratsText.textContent = "Sorry, You lost!";
      stateText.style.display = "none";
      fedbackImg.src = "./assets/20459859.jpg";
    }
  }, 3500);

  // To reset the spin wheel
  setTimeout(() => {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg";
  }, 4000);
};

// Handle Modal ok button
okBtn.addEventListener("click", () => {});
