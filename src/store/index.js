import { createStore } from 'vuex'

export default createStore({
  state: {
    divisions: [
      {
        id: '03',
        title: 'Concrete',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '04',
        title: 'Masonry',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 2 }
      },
      {
        id: '05',
        title: 'Metals',
        status: 'active',
        stats: { likelyNot: 2, likely: 4, will: 3 }
      },
      {
        id: '06',
        title: 'Wood, Plastics, and Composites',
        status: 'active',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '07',
        title: 'Thermal and Moisture Protection',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '08',
        title: 'Openings',
        status: 'active',
        stats: { likelyNot: 4, likely: 4, will: 0 }
      },
      {
        id: '09',
        title: 'Finishes',
        status: 'active',
        stats: { likelyNot: 3, likely: 4, will: 2 }
      },
      {
        id: '10',
        title: 'Specialties',
        status: 'wrong',
        stats: { likelyNot: 2, likely: 1, will: 0 }
      },
      {
        id: '11',
        title: 'Equipment',
        status: 'active',
        stats: { likelyNot: 4, likely: 3, will: 1 }
      },
      {
        id: '12',
        title: 'Furnishings',
        status: 'likely',
        stats: { likelyNot: 6, likely: 3, will: 1 }
      },
      {
        id: '13',
        title: 'Special Construction',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '14',
        title: 'Conveying Equipment',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '21',
        title: 'Fire Suppression',
        status: 'active',
        stats: { likelyNot: 1, likely: 7, will: 1 }
      },
      {
        id: '22',
        title: 'Plumbing',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '23',
        title: 'Heating, Ventilating, and Air Conditioning (HVAC)',
        status: 'likely',
        stats: { likelyNot: 6, likely: 3, will: 1 }
      },
      {
        id: '25',
        title: 'Integrated Automation',
        status: 'active',
        stats: { likelyNot: 4, likely: 7, will: 0 }
      },
      {
        id: '26',
        title: 'Electrical',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '27',
        title: 'Communications',
        status: 'active',
        stats: { likelyNot: 3, likely: 4, will: 2 }
      },
      {
        id: '28',
        title: 'Electronic Safety and Security',
        status: 'active',
        stats: { likelyNot: 4, likely: 5, will: 1 }
      },
      {
        id: '31',
        title: 'Earthwork',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '32',
        title: 'Exterior Improvements',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '33',
        title: 'Utilities',
        status: 'active',
        stats: { likelyNot: 3, likely: 4, will: 2 }
      },
      {
        id: '34',
        title: 'Transportation',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 1 }
      },
      {
        id: '35',
        title: 'Waterway and Marine Construction',
        status: 'wrong',
        stats: { likelyNot: 2, likely: 1, will: 0 }
      },
      {
        id: '40',
        title: 'Process Integration',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '41',
        title: 'Material Processing and Handling Equipment',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '42',
        title: 'Process Heating, Cooling, and Drying Equipment',
        status: 'wrong',
        stats: { likelyNot: 3, likely: 2, will: 0 }
      },
      {
        id: '43',
        title: 'Process Gas and Liquid Handling',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '44',
        title: 'Pollution and Waste Control Equipment',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '45',
        title: 'Industry-Specific Manufacturing Equipment',
        status: 'wrong',
        stats: { likelyNot: 2, likely: 1, will: 0 }
      },
      {
        id: '46',
        title: 'Water and Wastewater Equipment',
        status: 'active',
        stats: { likelyNot: 5, likely: 7, will: 3 }
      },
      {
        id: '47',
        title: 'Manufacturing Equipment',
        status: 'likely',
        stats: { likelyNot: 4, likely: 3, will: 2 }
      },
      {
        id: '48',
        title: 'Electrical Power Generation',
        status: 'wrong',
        stats: { likelyNot: 3, likely: 2, will: 0 }
      }
    ],
    selectedDivision: null,
    projectInfo: {
      name: 'Remington Hotel',
      location: 'Houston, TX',
      activeDivisions: '32 (edit)',
      bidDueDate: '03/20/2025 @ 2:00 EST (edit)',
      lastUpdated: '02/17/2025 12:51 AM'
    }
  },
  mutations: {
    SET_SELECTED_DIVISION(state, divisionId) {
      state.selectedDivision = divisionId
    },
    UPDATE_DIVISION_STATUS(state, { divisionId, status }) {
      const division = state.divisions.find(d => d.id === divisionId)
      if (division) {
        division.status = status
      }
    }
  },
  actions: {
    selectDivision({ commit }, divisionId) {
      commit('SET_SELECTED_DIVISION', divisionId)
    },
    updateDivisionStatus({ commit }, payload) {
      commit('UPDATE_DIVISION_STATUS', payload)
    }
  },
  getters: {
    getTotalStats: (state) => {
      return state.divisions.reduce((acc, division) => {
        acc.willBid += division.stats.will
        acc.likelyBidding += division.stats.likely
        acc.likelyNotBidding += division.stats.likelyNot
        return acc
      }, { willBid: 0, likelyBidding: 0, likelyNotBidding: 0 })
    },
    getCompletedDivisions: (state) => {
      return {
        completed: state.divisions.filter(d => d.status !== null).length,
        total: state.divisions.length
      }
    }
  }
})