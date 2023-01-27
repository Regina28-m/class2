import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../classes';

test('create new class Bowerman', () => {
  const result = new Bowerman('Bow', 'Bowman');
  const obj = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 26,
    defence: 25,
  };
  expect(result).toEqual(obj);
});

test('create new class Swordsman', () => {
  const result = new Swordsman('Swor', 'Swordsman');
  const obj = {
    name: 'Swor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(obj);
});

test('create new class Magician', () => {
  const result = new Magician('Swor', 'Magician');
  const obj = {
    name: 'Swor',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(obj);
});

test('create new class Daemon', () => {
  const result = new Daemon('Swor', 'Daemon');
  const obj = {
    name: 'Swor',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(obj);
});

test('create new class Daemon', () => {
  const result = new Undead('Swor', 'Undead');
  const obj = {
    name: 'Swor',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(obj);
});


test('create new class Zombie', () => {
  const result = new Zombie('Swor', 'Zombie');
  const obj = {
    name: 'Swor',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(obj);
});
