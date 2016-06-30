import test from 'ava';
import Collection from './../src/collection';

test('should return null if the collection is empty', t => {
    const first = new Collection().first();

    t.is(first, null);
});

test('should return first element in a collection', t => {
    const first = new Collection([6, 2, 3, 4, 5]).first();

    t.is(first, 6);
});

test('should return first element that satisifies a predicate/callback', t => {
    const first = new Collection([
        { name: 'Bran Stark', age: 7 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Jon Snow', age: 14 }
    ]).first(item => item.age > 7);

    t.deepEqual({ name: 'Arya Stark', age: 9 }, first);
});