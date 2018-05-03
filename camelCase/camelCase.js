function toCamelCase(str){
  return str.match('-') 
    ? camel(str, '-')
    : camel(str, '_');
}

const camel = (str, dashType) => {
  return str.split(dashType).map((word, i) => {
   return i === 0
            ? word
            : word[0].toUpperCase() + word.slice(1)
  }).join('');
}