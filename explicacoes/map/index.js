const tags = ["Front-end", "Back-end", "JavaScript", "CSS", "HTML", "React"];

// tags.forEach(tag => console.log("Nome da tag", tag));

const tagsTec = tags.map(function(tag) {
  return `<label>${tag}</label>`;
});

const tagsTec = tags.map(tag => {
  return `<label>${tag}</label>`;
});

const tagsTec = tags.map(tag => `<label>${tag}</label>`);

const tagsTec = tags.map(
  tag => `
    <label>${tag}</label>
    <input />
  `
);
console.log(tagsTec);
tagsTec.forEach(tag => console.log(tag));
