const encuentraNumerosRepetidos = repeticiones => {
  const nums = []
  const obj = {}
  for (let i = 0; i < repeticiones; i++) {
    nums.push(Math.round(Math.random() * 10))
  }
  nums.forEach(num => {
    if (!obj[num]) obj[num] = 0
    obj[num]++
  })

  console.log(obj, 'con forEach')
}

const encuentraNumerosRepetidosConReduce = repeticiones => {
  const nums = []
  for (let i = 0; i < repeticiones; i++) {
    nums.push(Math.round(Math.random() * 10))
  }
  const obj = nums.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 0
    acc[curr]++

    return acc
  }, {})

  console.log(obj, 'con reduce')
}

encuentraNumerosRepetidos(10000)
encuentraNumerosRepetidosConReduce(10000)
