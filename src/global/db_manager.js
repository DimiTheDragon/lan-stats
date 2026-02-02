export function getItem(name) {
  return localStorage.getItem(name);
}

export function setItem(name, value) {
  localStorage.setItem(name, value);
  console.info(`${value} was saved under ${name}`);
}
