import assert from 'assert';

const isEqual: (object1: unknown, object2: unknown) => boolean = (
  object1,
  object2,
) => {
  try {
    assert.deepStrictEqual(object1, object2);
  } catch (error) {
    return false;
  }

  return true;
};

export default isEqual;
