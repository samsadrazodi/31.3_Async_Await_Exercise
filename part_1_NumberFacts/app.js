let baseURL = "http://numbersapi.com";


// Part 1
async function part1() {
  let number = document.getElementById('favnum').value;
  try {
    let response = await axios.get(`${baseURL}/${number}?json`);
    let factDiv = document.getElementById('fact');
    factDiv.innerText = response.data.text;
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('btn').addEventListener('click', part1);

// Part 2

async function part2() {
    let numbers = document.getElementById('favnum2').value.split(',');
    let factsDiv = document.getElementById('fact2');
    factsDiv.innerHTML = '';
    for (let number of numbers) {
      try {
        let response = await axios.get(`${baseURL}/${number}?json`);
        let fact = document.createElement('p');
        fact.innerText = response.data.text;
        factsDiv.appendChild(fact);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  document.getElementById('btn2').addEventListener('click', part2);



  // Part 3

  async function part3() {
    let number = document.getElementById('favnum3').value;
    let factsDiv = document.getElementById('fact3');
    factsDiv.innerHTML = '';
    for (let i = 1; i <= 4; i++) {
      try {
        let response = await axios.get(`${baseURL}/${number}?json`);
        let fact = document.createElement('p');
        fact.innerText = response.data.text;
        factsDiv.appendChild(fact);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  document.getElementById('btn3').addEventListener('click', part3);