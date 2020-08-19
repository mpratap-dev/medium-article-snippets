function identify() { 
  return this.name.toUpperCase();
}
function speak() {
  const greeting = `Hello, I'm ${identify.call(this)}`;
  console.log(greeting);
}

const me = {
  name: 'Mahesh'
};

const you = {
  name: 'Reader'
}

identify.call(me); // MAHESH
identify.call(you); // READER

speak.call(me); // Hello, I'm MAHESH
speak.call(you); // Hello, I'm READER
