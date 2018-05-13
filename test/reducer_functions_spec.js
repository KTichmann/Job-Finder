import { expect } from 'chai';
import { addLocation, addKeywords, removeKeyword, addPosition, removePosition } from "../src/redux/reducer_functions"

describe("all the reducer functions", () => {
  // describe("" () => {
  //
  // })
  let state = {
    preferences: {
      location: 'London',
      keywords: ['github', 'react&redux', 'html']
    },
    positions: [{id: 0, inList: 'yes'}, {id: 1, inList: 'no'}]
  }
  let stateCopy = Object.assign({}, state)
  describe("addLocation", () => {
    let newState = addLocation(state, "Cape Town")
    it("doesn't modify original state", () => {
      expect(state).to.deep.equal(stateCopy)
    })
    it("adds location to location state", () => {
      expect(newState).to.deep.equal({
        preferences: {
          location: 'Cape&Town',
          keywords: ['github', 'react&redux', 'html']
        },
        positions: [{id: 0, inList: 'yes'}, {id:1, inList:'no'}]
      })
    })
  })
  describe('addKeywords', () => {
    let newState = addKeywords(state, ["javascript", "css 3"])
    it("doesn't change the original state", () => {
      expect(state).to.deep.equal(stateCopy)
    })
    it("adds keywords to the state", () => {
      expect(newState).to.deep.equal({
        	preferences: {
        		location: "London",
        		keywords: [ "javascript", "css&3", "github", "react&redux", "html"]
        },
        positions: [{id: 0, inList: "yes"}, {id: 1, inList: "no"}]
      })
    })
  })

  describe('removeKeyword', () => {
    let newState = removeKeyword(state, 'github')
    it("doesn't change original state", () => {
      expect(state).to.deep.equal(stateCopy)
    })
    it("removes keyword", () => {
      expect(newState).to.deep.equal(
        {
          preferences: {
            location: 'London',
            keywords: ['react&redux', 'html']
          },
          positions: [{id: 0, inList: 'yes'}, {id: 1, inList: 'no'}]
        }
      )
    })
  })

  describe('addPosition', () => {
    let newState = addPosition(state, {id:3, addList:'no'})
    it("doesn't modify original state", () => {
      expect(state).to.deep.equal(stateCopy)
    })
    it("adds new position to state", () => {
      expect(newState).to.deep.equal(
        {
          preferences: {
            location: 'London',
            keywords: ['github', 'react&redux', 'html']
          },
          positions: [{id: 0, inList: 'yes'}, {id: 1, inList: 'no'}, {id: 3, addList: 'no'}]
        }
      )
    })
  })
  describe('removePosition', () => {
    let newState = removePosition(state, 0)
    it("doesn't change original state", () => {
      expect(state).to.deep.equal(stateCopy)
    })
    it("removes position from state", () => {
      expect(newState).to.deep.equal(
        {
          preferences: {
            location: 'London',
            keywords: ['github', 'react&redux', 'html']
          },
          positions: [{id: 1, inList: 'no'}]
        }
      )
    })
  })
})
