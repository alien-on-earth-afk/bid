<template>
  <div class="division-section">
    <h2>Select a CSI Division</h2>
    <p class="subtitle">click or tap to view activity</p>
    <div class="legend">
      0 | 0 | 0 = Likely Not Bidding | Likely Bidding | Will Bid
    </div>

    <div class="division-grid">
      <DivisionCard
        v-for="division in divisions"
        :key="division.id"
        :division="division"
        @click="handleDivisionClick(division)"
      />
    </div>
  </div>
</template>

<script>
import DivisionCard from './DivisionCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DivisionGridView',
  components: {
    DivisionCard
  },
  computed: {
    ...mapState(['divisions'])
  },
  methods: {
    ...mapActions(['selectDivision']),
    handleDivisionClick(division) {
      this.selectDivision(division.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.division-section {
  margin-top: 30px;

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .subtitle {
    color: #666;
    font-size: 14px;
    margin-bottom: 16px;
  }

  .legend {
    color: #666;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .division-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
}

@media (max-width: 1200px) {
  .division-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .division-grid {
    grid-template-columns: 1fr;
  }
}
</style>