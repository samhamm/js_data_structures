'use strict';

const Graph = require('../lib/graph');
const expect = require('chai').expect;

describe('Graph Data Structure', () => {
  describe('new Graph()', () => {
    const graph = new Graph();
    it('should create a new Graph object', () => {
      expect(graph).to.be.instanceof(Graph);
    });
    it('should have no verticies', () => {
      const verticies = Object.keys(graph.verticies);
      expect(verticies.length).to.equal(0);
    });
  });
  describe('new Graph() with args', () => {
    it('should create a new Graph object with edges and verticies', () => {

    });
    it('should throw error on duplicate verticies', () => {

    });
    it('should throw error on invalid args', () => {

    });
  });
  describe('adjacent()', () => {
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addEdge(2, 'a', 'c');
    graph.addEdge(4, 'a', 'b');
    graph.addEdge(3, 'b', 'c');
    it('should return an edge between two verticies if exists', () => {
      expect(graph.adjacent('a', 'b')).to.equal(4);
      expect(graph.adjacent('a', 'c')).to.equal(2);
      expect(graph.adjacent('c', 'b')).to.equal(3);
    });
    it('should return null if no edge exists between two verticies', () => {
      expect(graph.adjacent('d', 'a')).to.equal(null);
    });
    it('should throw error if invalid verticies', () => {
      expect(graph.adjacent(['a'], {'a': 2})).to.be.instanceof(ReferenceError);
    });
  });
  describe('neighbors()', () => {
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addEdge(2, 'a', 'c');
    graph.addEdge(4, 'a', 'b');
    graph.addEdge(3, 'b', 'c');
    it('should return any edges pointing to vertex', () => {
      expect(graph.neighbors('a')).to.equal('c,b');
    });
    it('should return null if no edge exists', () => {
      expect(graph.neighbors('d')).to.equal(null);
    });
    it('should throw error if invalid vertex', () => {
      expect(graph.neighbors(['a'])).to.be.instanceof(ReferenceError);
    });
  });
  describe('addVertex()', () => {
    const graph = new Graph();
    it('should add new vertex to graph', () => {
      graph.addVertex(23);
      const verticies = Object.keys(graph.verticies);
      expect(verticies.length).to.equal(1);
      expect(verticies[0]).to.equal('23');
    });
    it('should throw error if vertex already exists in graph', () => {
      graph.addVertex(23);
      expect(graph.addVertex(23)).to.be.instanceof(ReferenceError);
    });
    it('should throw error if invalid vertex value', () => {
      expect(graph.addVertex([2, 3, 4])).to.be.instanceof(TypeError);
    });
  });
  describe('removeVertex()', () => {
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addEdge(2, 'a', 'c');
    graph.addEdge(4, 'a', 'b');
    graph.addEdge(3, 'b', 'c');
    graph.removeVertex('c');
    it('should remove and return vertex from list', () => {
      expect(graph.getVerticies().indexOf('c')).to.equal(-1);
    });
    it('should remove any edges pointing to vertex', () => {
      expect(graph.getVerticies().indexOf('a')).to.not.equal(-1);
      expect(graph.getVerticies().indexOf('b')).to.not.equal(-1);
    });
    it('should throw error if vertex does not exist', () => {
      expect(graph.removeVertex('f')).to.be.instanceof(ReferenceError);
    });
    it('should throw error if invalid vertex value', () => {
      expect(graph.removeVertex([1, 2])).to.be.instanceof(ReferenceError);
    });
  });
  describe('addEdge()', () => {
    const graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');
    it('should add new edge between two verticies', () => {
      graph.addEdge(10, 'a', 'b');
      expect(graph.verticies.a.b).to.equal(graph.verticies.b.a);
      expect(graph.verticies.a.b).to.equal(10);
    });
    it('should create adjacent verticies if not provided in args', () => {
      graph.addEdge(12);
    });
    it('should throw error on invalid edge val', () => {

    });
  });
  describe('removeEdge()', () => {
    const graph = new Graph();
    it('should remove edge between two verticies', () => {

    });
    it('should throw error on invalid verticies', () => {

    });
    it('should throw error if no edge exists', () => {

    });
  });
  describe('breadthFirstTraversal()', () => {
    const graph = new Graph();
  });
  describe('depthFirstTraversal()', () => {
    const graph = new Graph();
  });
});
