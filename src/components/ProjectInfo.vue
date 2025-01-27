<template>
  <div class="project-info">
    <div class="info-row">
      <label>Project Name:</label>
      <div class="value">{{ projectData.name }}</div>
    </div>
    <div class="info-row">
      <label>Location:</label>
      <div class="value">{{ projectData.location }}</div>
    </div>
    <div class="info-row">
      <label>Active Divisions:</label>
      <div class="value">{{ projectData.activeDivisions }} <span class="edit">(edit)</span></div>
    </div>
    <div class="info-row">
      <label>Bid Due Date:</label>
      <div class="value">{{ projectData.bidDueDate }} <span class="edit">(edit)</span></div>
    </div>
    <a href="#" class="rfi-link">View Open RFI Board</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
  props: {
    projectData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;

  .info-row {
    display: flex;
    margin-bottom: 15px;
    
    label {
      font-weight: 500;
      min-width: 120px;
    }

    .edit {
      color: #666;
      cursor: pointer;
    }
  }

  .rfi-link {
    color: #007bff;
    text-decoration: none;
    display: block;
    margin-top: 15px;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>