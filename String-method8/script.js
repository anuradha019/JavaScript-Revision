const message = 'Hello World! My name is Anuradha'
const fakeMessage = '     Hi Angle'
const finalMessage = fakeMessage.trim()
const finalMessageLowercase = fakeMessage.trim().toLocaleLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')

const lastFourDigits = '7648'
const maskedAccountNumber = lastFourDigits.padStart(16, '*')

const capitalMessage = message.toUpperCase()
const templateString = `My account number is ${lastFourDigits.padStart(16, '*')}`
