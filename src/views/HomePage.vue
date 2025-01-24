<template>
  <div class="bid-coverage">
    <PageHeader 
      :lastUpdated="lastUpdated"
      :userName="userName"
      :userRole="userRole"
      :profileImage="profileImage"
    />

    <div class="project-title">
      <h1>Remington Hotel Bid Coverage</h1>
      <a href="#" class="view-all">View All Projects</a>
    </div>

    <div class="main-content">
      <div class="left-panel">
        <ProjectInfo :projectData="projectData" />
      </div>
      <div class="right-panel">
        <BidOverview :bidStats="bidStats" />
      </div>
    </div>

    <DivisionGrid />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import BidOverview from '@/components/BidOverview.vue'
import DivisionGrid from '@/components/DivisionGrid.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    PageHeader,
    ProjectInfo,
    BidOverview,
    DivisionGrid
  },
  computed: {
    ...mapState(['divisions', 'selectedDivision'])
  },
  data() {
    return {
      lastUpdated: '02/17/2025 12:51 AM',
      userName: 'Alex Davis',
      userRole: 'Chief Estimator',
      profileImage: '/path-to-profile-image.jpg',
      projectData: {
        name: 'Remington Hotel',
        location: 'Houston, TX',
        activeDivisions: '32 (edit)',
        bidDueDate: '02/20/2025 @ 2:00 EST (edit)'
      },
      bidStats: {
        willBid: 34,
        likelyBidding: 73,
        likelyNotBidding: 145,
        divisionsCompleted: 19,
        totalDivisions: 32,
        wrongTradeInvited: 73
      }
    }
  }
}
</script>

<style lang="scss">
.bid-coverage {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.project-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 30px;
  padding: 0 10px;

  h1 {
    font-size: 24px;
    margin: 0;
    color: #333;
    font-weight: 500;
  }

  .view-all {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-bottom: 30px;
  padding: 0 10px;

  .left-panel {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .right-panel {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }

  .project-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>