'use strict';

const DoubleLinked = require('../lib/linked_list_dbl');
const expect = require('chai').expect;

describe('DoubleLinked()', () => {
  let dl;
  describe('new DoubleLinked list', () => {
    it('should instantiate a new DoubleLinked list object', () => {
      dl = new DoubleLinked();
      expect(dl).to.be.instanceof(DoubleLinked);
    });
    it('should return null value at front of list', () => {
      expect(dl.head).to.equal(null);
    });
    it('should return null value at tail of list', (() => {
      expect(dl.tail).to.equal(null);
    }));
  });
  describe('new DoubleLinked list with array arg, [12, 32, 43, 2]', () => {
    it('should return a value of 2 at head of list', () => {
      dl = new DoubleLinked([12, 32, 43, 2]);
      expect(dl.head.val).to.equal(2);
    });
    it('should return a value of 12 at tail of list', (() => {
      dl = new DoubleLinked([12, 32, 43, 2]);
      expect(dl.tail.val).to.equal(12);
    }));
  });
  describe('insert()', () => {
    it('should insert a new value at the head of the list', () => {
      dl = new DoubleLinked();
      dl.insert(2);
      expect(dl.head.val).to.equal(2);
      expect(dl.tail.val).to.equal(2);
      dl.insert(1);
      expect(dl.head.val).to.equal(1);
      expect(dl.tail.val).to.equal(2);
      dl.insert(4);
      expect(dl.head.val).to.equal(4);
      expect(dl.tail.val).to.equal(2);
    });
    it('should throw error if no arg', () => {
      expect(dl.insert()).to.be.instanceof(ReferenceError);
    });
  });
  describe('append()', () => {
    it('should append a new value at the tail of the list', () => {
      dl = new DoubleLinked();
      dl.append(2);
      expect(dl.tail.val).to.equal(2);
      expect(dl.head.val).to.equal(2);
      dl.append(1);
      expect(dl.tail.val).to.equal(1);
      expect(dl.head.val).to.equal(2);
      dl.append(4);
      expect(dl.tail.val).to.equal(4);
      expect(dl.head.val).to.equal(2);
    });
    it('should throw error if no arg', () => {
      expect(dl.insert()).to.be.instanceof(ReferenceError);
    });
  });
  describe('pop()', () => {
    it('should remove a value at the head of the list', () => {
      dl = new DoubleLinked([2, 4, 6]);
      expect(dl.pop()).to.equal(6);
      expect(dl.head.val).to.equal(4);
    });
    it('should throw error if list is empty', () => {
      dl = new DoubleLinked();
      expect(dl.pop()).to.be.instanceof(ReferenceError);
    });
  });
  describe('shift', () => {
    it('should remove the value at the tail of the list', () => {
      dl = new DoubleLinked([2, 4, 6]);
      expect(dl.shift()).to.equal(2);
      expect(dl.tail.val).to.equal(4);
    });
    it('should throw error if list is empty', () => {
      dl = new DoubleLinked();
      expect(dl.shift()).to.be.instanceof(ReferenceError);
    });
  });
  describe('remove()', () => {
    it('should remove the first matching value from the head of the list', () => {
      dl = new DoubleLinked([3, 5, 7, 9, 5, 6]);
      expect(dl.remove(5)).to.equal(5);
      expect(dl.head.val).to.equal(6);
      expect(dl.head.prev.val).to.equal(9);
      expect(dl.tail.next.val).to.equal(5);
    });
    it('should throw error if val not found in list', () => {
      dl = new DoubleLinked([3, 5, 7, 9, 5, 6]);
      expect(dl.remove(100)).to.be.instanceof(RangeError);
    });
    it('should throw error if no arg', () => {
      dl = new DoubleLinked([3, 5, 7, 9, 5, 6]);
      expect(dl.remove()).to.be.instanceof(ReferenceError);
    });
    it('should throw error if list is empty', () => {
      dl = new DoubleLinked();
      expect(dl.remove()).to.be.instanceof(ReferenceError);
    });
  });
});
