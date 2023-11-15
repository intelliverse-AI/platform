<template>
  <div class="dash-side-nav">
    <div class="links nav">
      <button class="link">
        <div class="icon menu-btn">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="text">
          <span class="dash-logo">
            <img
              src="/images/logo.png"
              alt="logo"
              class="h-20 w-20 object-contain"
            />
          </span>
        </div>
      </button>
      <button class="link create-btn">
        <div class="icon">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="text">
          <span>Create</span>
        </div>
      </button>
      <router-link class="link btn-content" to="/">
        <div class="icon">
          <i class="fa-solid fa-house"></i>
        </div>
        <div class="text">
          <span>Home</span>
        </div>
      </router-link>
      <router-link
        class="link btn-content"
        to="/dashboard/research-papers"
        active-class="active"
      >
        <div class="icon">
          <i class="fa-solid fa-table"></i>
        </div>
        <div class="text">
          <span>Research Papers</span>
        </div>
      </router-link>
      <router-link
        class="link btn-content"
        to="/dashboard/challenges"
        active-class="active"
      >
        <div class="icon">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <div class="text">
          <span>Challenges</span>
        </div>
      </router-link>

      <router-link
        class="link btn-content"
        to="/dashboard/datasets"
        active-class="active"
      >
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>
        <div class="text">
          <span>Datasets</span>
        </div>
      </router-link>
      <router-link
        class="link btn-content"
        to="/dashboard/forums"
        active-class="active"
      >
        <div class="icon">
          <i class="fa-solid fa-message"></i>
        </div>
        <div class="text">
          <span>Forums</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>