<template>
  <div class="dashboard">
    <aside>
      <sidebar-view></sidebar-view>
    </aside>
    <main class="dash-side-content">
      <dashboard-header></dashboard-header>
      <div>
        <router-view></router-view>
      </div>
     
    </main>
  </div>
</template>

<script>
import DashboardHeader from "../DashboardHeader.vue";
import SidebarView from "../SidebarView.vue";
export default {
  components: { SidebarView, DashboardHeader },
};
</script>

<style>
</style>