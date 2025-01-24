<template>
  <div class="bid-overview">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-value">{{ bidStats.willBid }}</div>
        <div class="stat-label">Will Bid</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ bidStats.likelyBidding }}</div>
        <div class="stat-label">Likely Bidding</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ bidStats.likelyNotBidding }}</div>
        <div class="stat-label">Likely Not Bidding</div>
      </div>
    </div>

    <div class="progress-section">
      <div class="progress-label">
        <span>Divisions Completed</span>
        <span>{{ bidStats.divisionsCompleted }}/{{ bidStats.totalDivisions }}</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill"
          :style="{
            width: `${(bidStats.divisionsCompleted / bidStats.totalDivisions) * 100}%`,
            background: 'linear-gradient(to right, #dc3545, #ffc107, #28a745)'
          }"
        ></div>
      </div>
    </div>

    <div class="wrong-trade">
      <span>Wrong Trade Invited:</span>
      <span class="value">{{ bidStats.wrongTradeInvited }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BidOverview',
  props: {
    bidStats: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bid-overview {
  padding: 20px;

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;

    .stat-item {
      text-align: center;

      .stat-value {
        font-size: 24px;
        font-weight: 500;
        color: #333;
      }

      .stat-label {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .progress-section {
    margin-bottom: 20px;

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 14px;
      color: #666;
    }

    .progress-bar {
      height: 8px;
      background-color: #e9ecef;
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        transition: width 0.3s ease;
      }
    }
  }

  .wrong-trade {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;

    .value {
      font-weight: 500;
      color: #333;
    }
  }
}
</style>