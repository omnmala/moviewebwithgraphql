export const people = [
  {
    id: '0',
    name: 'Seungweon Seo',
    age: 27,
    gender: 'male'
  },
  {
    id: '1',
    name: 'Hyeonggyun Lim',
    age: 28,
    gender: 'male'
  },
  {
    id: '2',
    name: 'Jeonseo Choi',
    age: 27,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Sechan Park',
    age: 25,
    gender: 'male'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}
