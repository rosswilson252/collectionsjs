import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#reverse} */
test('should return a collection with reversed element order', t => {
    const collection = new Collection([1, 2, 3]).reverse();

    t.deepEqual([3, 2, 1], collection.all());
});
