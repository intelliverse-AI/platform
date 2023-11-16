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
      <router-link class="link btn-content" to="/dashboard/hub">
        <div class="icon">
          <i class="fa-solid fa-house"></i>
        </div>
        <div class="text">
          <span>My Hub</span>
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
          <span>Hackathons</span>
        </div>
      </router-link>
      <router-link
        class="link btn-content"
        to="/dashboard/licenses"
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
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div class="text">
          <span>Licenses</span>
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
        to="/dashboard/tools"
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
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
        <div class="text">
          <span>Tools</span>
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

<style></style>
