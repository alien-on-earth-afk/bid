<template>
  <header class="header">
    <div class="header-left">
      <span class="template-label">Template</span>
    </div>
    <div class="header-right">
      <span class="last-updated">Last Updated: {{ lastUpdated }}</span>
      <div class="user-profile">
        <img :src="profileImage" alt="Profile" class="profile-image">
        <div class="user-info">
          <div class="user-name">{{ userName }}</div>
          <div class="user-role">{{ userRole }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    lastUpdated: {
      type: String,
      default: '02/17/2025 12:51 AM'
    },
    userName: {
      type: String,
      default: 'Alex Davis'
    },
    userRole: {
      type: String,
      default: 'Chief Estimator'
    },
    profileImage: {
      type: String,
      default: '/path-to-profile-image.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  
  .header-left {
    .template-label {
      color: #666;
      font-size: 14px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;

    .last-updated {
      color: #666;
      font-size: 14px;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 10px;

      .profile-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      .user-info {
        .user-name {
          font-weight: 500;
          font-size: 14px;
        }

        .user-role {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 10px;
    
    .header-right {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>