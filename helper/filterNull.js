export default function(obj) {
  const value = Object.values(obj)
  const key = Object.keys(obj)
  const newObj = {}

  for (let i = 0; i < value.length; i++) {
    if (value[i] || value[i] === false) newObj[key[i]] = value[i]
  } // /for loop

  if (newObj) return newObj
  else return null
}
