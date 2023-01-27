import Character from '../Character';

test('create new class', () => {
  const result = new Character('Bow', 'Swordsman');
  const sample = {
    name: 'Bow',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(sample);
});

test('catsh the Error with name', () => {
  const result1 = () => new Character('B', 'Swordsman');
  expect(result1).toThrow('Длина имени не соответствует условиям');
});

test('catsh the Error with type', () => {
  const result2 = () => new Character('Bow', 'Sword');
  expect(result2).toThrow('Не соответствие заданным типам');
});

test('catsh the Error with level', () => {
  const result = new Character('Bow', 'Swordsman');
  result.health = 0;
  const test = () => result.levelUp();
  expect(test).toThrow('Нельзя повысить левел умершего');
});

test('test levelUp', () => {
  const result = new Character('Bow', 'Swordsman');
  result.levelUp();
  const sample = {
    name: 'Bow',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(sample);
});

test('catsh the Error with damage', () => {
  const result = new Character('Bow', 'Swordsman');
  result.health = 0;
  const test = () => result.damage(2);
  expect(test).toThrow('Нельзя выполнить для умершего');
});

test('test damage', () => {
  const result = new Character('Bow', 'Swordsman');
  result.damage(3);
  const sample = {
    name: 'Bow',
    type: 'Swordsman',
    health: 97,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(sample);
});
