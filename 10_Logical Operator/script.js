const userAge = 15

const isCollegeStudent =  (userAge >= 18) && (userAge <= 24)
const isSchoolStudent = (userAge >= 5) && (userAge <= 18)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = 'Hello' && null
const orResult2 = 'hello' || null

const andResult3 = 'hello' && -4 + 4
const orResult3 = undefined || 4 + 8 * 5

const andResult4 = 'hello' && console.log('hello')
const orResult4 = undefined || console.log('hello')

const andResult5 = undefined && console.log('hello')
const orResult5 = 'hello' || console.log('hello')
// const logResult = console.log('hello')