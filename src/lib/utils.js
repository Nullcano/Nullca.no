export const slugify = (str) => {
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'
  const newStr = str.split('').map((letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
  return newStr.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/&/g, '-y-').replace(/[^\w-]+/g, '').replace(/--+/g, '-')
}

export const stripHTML = (str) => {
  if ((str === null) || (str === '')) { return false }
  else { str = '' + str }
  return str.replace( /(<([^>]+)>)/ig, '')
}