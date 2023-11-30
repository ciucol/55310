export const convertDate = date => {
  const convertedDate = new Date(date)
  return convertedDate.getTime()
}

const response = convertDate('98/12/02')

expect(response).to.be.equal(1543141323)
