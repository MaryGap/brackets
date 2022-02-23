module.exports = function check(str, bracketsConfig) {
  let openBracket = []
  let closeBracket = []
  let Obj = {}

  bracketsConfig.map(i => {
    openBracket.push(i[0])
    closeBracket.push(i[1])
    Obj[i[1]] = i[0]
  })
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let curBracket = str[i]
    let topElement = stack[stack.length - 1]

    if (openBracket.includes(curBracket) && closeBracket.includes(curBracket)) {
      if (topElement === curBracket) {
        stack.pop()
      } else {
        stack.push(curBracket)
      }
    } else if (openBracket.includes(curBracket)) {
      stack.push(curBracket)
    } else {
      if (stack.length === 0) {
        return false
      }
      if (Obj[curBracket] === topElement) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
