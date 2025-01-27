<template>
  <header class="header">
    <div class="header-left">Template</div>
    <div class="header-right">
      <span>Last Updated: 02/17/2025 12:51 AM</span>
      <div class="user-profile">
        <span>Alex Davis</span>
        <span>Chief Estimator</span>
        <img src="/profile-placeholder.png" alt="Profile Image" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.header-left {
  font-size: 18px;
  font-weight: bold;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 5px;
}
.user-profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
