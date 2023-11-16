<template>
  <div class="dash-content-displayed">
    <div id="challenges-content">
      <div class="dash-main-cards">
        <filters-component></filters-component>
        <div class="cards">
          <div class="card-topic">
            <h2><i class="fa-solid fa-arrow-trend-up"></i> Free Datasets</h2>
            <a href="#">View All</a>
          </div>
          <div class="topic-cards grid grid-cols-1 md:grid-cols-3">
            <dataset-cards type="USE DATASET"></dataset-cards>
            <dataset-cards type="USE DATASET"></dataset-cards>
            <dataset-cards type="USE DATASET"></dataset-cards>
          </div>
        </div>
        <div class="cards">
          <div class="card-topic">
            <h2><i class="fa-solid fa-arrow-trend-up"></i> Premium Datasets</h2>
            <a href="#">View All</a>
          </div>
          <div class="topic-cards grid grid-cols-1 md:grid-cols-3">
            <dataset-cards type="BUY DATASET"></dataset-cards>
            <dataset-cards type="BUY DATASET"></dataset-cards>
            <dataset-cards type="BUY DATASET"></dataset-cards>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltersComponent from "@/components/utils/FiltersComponent.vue";
import DatasetCards from "./cards/DatasetCards.vue";
export default {
  components: { FiltersComponent, DatasetCards },
};
</script>

<style></style>
