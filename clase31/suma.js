const suma = (...numbers) => {
  console.log(numbers)
  // if (!num1 || !num2) return 0
  if (numbers.length === 0) return 0

  // if (typeof num1 !== 'number' || typeof num2 !== 'number') return null
  if (!numbers.every(number => typeof number === 'number')) return null

  return numbers.reduce((acc, curr) => acc + curr, 0)
}

module.exports = suma
