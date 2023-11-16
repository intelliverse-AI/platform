<template>
  <div class="topic-card">
    <div class="img">
      <img src="/images/topic image.jpg" alt="afroaiinnovate" />
    </div>
    <div class="topic-card-info">
      <a href="single_challenge.html"
        >Movies & Ratings for Recommendation System</a
      >
      <p>Nicoleta Cilibiu · Updated 3 days ago</p>
      <p>Usability <strong>9.4</strong> · 866 kB</p>
      <p>2 Files (CSV)</p>
    </div>
    <div class="pricing">
      <span>50,000 Users</span>
      <div class="flex items-center paper-overview">
        <span class="btn-citation h-[44px] w-[140px] flex items-center rounded-[10px] justify-center" v-if="type=='USE DATASET'">{{ type }}</span>
        <button class="btn-download" v-else>{{ type }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['type']
};
</script>

<style></style>
