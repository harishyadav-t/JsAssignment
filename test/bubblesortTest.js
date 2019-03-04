describe('bubbleSort', function() {
    var assert; 
    var bubbleSort;
    var unsortedArray ;
    before(function() {
        assert = require('assert');
        bubbleSort = require('../files/bubblesort');
        unsortedArray = [5,1,4,23,8,6,3];
    });
  
    after(function() {
      // runs after all tests in this block
    });
  
    beforeEach(function() {
      // runs before each test in this block
    });
  
    afterEach(function() {
      // runs after each test in this block
    });
    it('should return sorted array ',function(){
        var result =bubbleSort(unsortedArray);
        assert.equal(result.toString(),[1,3,4,5,6,8,23].toString());
        var result =bubbleSort([5,1,4,23,85,6,3]);
        assert.notEqual(result.toString(),[1,3,4,5,6,85,23].toString());
        var result =bubbleSort([1,31,24,5,6,85,23]);
        assert.equal(result.toString(),[1,5,6,23,24,31,85].toString());
        var result =bubbleSort([-11,-31,24,-5,6,85,23]);
        assert.equal(result.toString(),[-31,-11,-5,6,23,24,85].toString());
    }) 
    
  });