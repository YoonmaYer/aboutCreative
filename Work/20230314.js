 let animals = ["Aadvark", "Albareoss", "Aligator", "Alpaca",
                "Ant", "Ape", "armadillo", "Donkey",
                "Baboon","Tiger", "Barracuda", "Bat", 
                "Bear", "Spider", "Bee", "Bison",  
                "Cat", "Red dear", "Cattle", "Zebra"]

// 마지막 인덱스 삭제
animals.pop()
console.log(animals)


// 개, 모기, 쥐, 뮬(?)
animals.push("dog")
animals.push("Mosquito", "Mouse", "Mule")


// 사람과 고양이
console.log(animals.includes("Human"))
console.log(animals.includes("Cat"))

// Red dear을 Dear로 변경
animals[17] = "Deer"
console.log(animals)


// spider부터 3개의 아이템을 기존 array에서 제거
animals.splice(13,16)
console.log(animals)

// Tiger 이후의 값 제거
animals.splice(9, 19)
console.log(animals)

// "B"로 시작되는 아이템 "Baboon"부터 "Bison"까지 가져와 새로운 array에 저장
let animalsB = []

for (let i = 0; i < animals.length; i++) {
  if (animals[i][0] === "B"){
  animalsB.push(animals[])
}
}


// a와 b의 값을 바꾸기
let a = 50
let b = 30

function swap(x,y){
  let temp = x
  x = y
  y = temp

 console.log(x,y)
}

swap(a,b)
