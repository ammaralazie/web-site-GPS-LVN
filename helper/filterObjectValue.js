export const filter = (keyName, value, data, index) => {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      if (!Array.isArray(item)) {
        if (item[keyName] === value) {
          return index ? i : item
        }
      } else {
        const result = filter(keyName, value, item, index)
        if (result !== null) {
          return result
        }
      }
    }
  }
  return null
}
