<template>
  <div 
    class="division-card"
    :class="statusClass"
  >
    <div class="division-info">
      <div class="division-number">{{ division.id }}</div>
      <div class="division-title">{{ division.title }}</div>
    </div>
    <div class="bid-stats">
      {{ division.stats.likelyNot }} | {{ division.stats.likely }} | {{ division.stats.will }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DivisionCard',
  props: {
    division: {
      type: Object,
      required: true,
      validator: function(obj) {
        return obj.id && obj.title && obj.stats
      }
    }
  },
  computed: {
    statusClass() {
      return {
        'status-active': this.division.status === 'active',
        'status-likely': this.division.status === 'likely',
        'status-wrong': this.division.status === 'wrong'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.division-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .division-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    .division-number {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
    }

    .division-title {
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }
  }

  .bid-stats {
    color: #666;
    font-size: 12px;
  }

  &.status-active {
    border-left: 4px solid #28a745;
  }

  &.status-likely {
    border-left: 4px solid #ffc107;
  }

  &.status-wrong {
    border-left: 4px solid #dc3545;
  }
}
</style>