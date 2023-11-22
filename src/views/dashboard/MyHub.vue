<template>
  <div class="dash-content-displayed">
    <div id="challenges-content">
      <div class="dash-main-cards">
        <div class="flex flex-col md:flex-row gap-5">
          <div class="basis-1/3 space-y-4">
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4"
            >
              <div class="intro-text dci">
                <h1 class="font-bold">Research Papers</h1>
                <p>
                  Publish an AI research paper and get peers review your work.Gain Global recognition
                </p>
                <button>Publish A Paper</button>
              </div>
            </div>
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4"
            >
              <div class="intro-text dci">
                <h1 class="font-bold">Projects</h1>
                <p>
                  Grow your skills and earn by participating in opensource and paid AI
                  research prpojects.
                </p>
                <button>Join A Project</button>
              </div>
            </div>
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4"
            >
              <div class="intro-text dci">
                <h1 class="font-bold">Datasets</h1>
                <p>
                  Datasets help research effectly achieve research tasks. Upload opensource or proprietary datasets to our repository.
                </p>
                <button>Upload New Dataset</button>
              </div>
            </div>
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4"
            >
              <div class="intro-text dci">
                <h1 class="font-bold">Licenses and Copyright</h1>
                <p>
                 Do you have research work you'd want to obtain intellectual property.Apply for a Copyright or license with us
                </p>
                <button>Upload New Dataset</button>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div
            class="h-fit w-full rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4 activities"
          >
            <div>
              <div
              class="flex gap-4 border-b-solid border-b-2 border-b-black pb-2"
            >
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>

              <h1>MY RESEARCH PAPERS</h1>
            </div>
     <research-paper-small></research-paper-small>
     <research-paper-small></research-paper-small>
            </div>
          </div>
          <div
            class="h-fit w-full rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4 activities"
          >
            <div>
              <div
              class="flex gap-4 border-b-solid border-b-2 border-b-black pb-2"
            >
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <h1>TOP DISCUSSIONS</h1>
            </div>    
   <div class="flex gap-2">
    <my-forum-cards></my-forum-cards>
    <my-forum-cards></my-forum-cards>
   </div>
            </div>
           
 
          </div>
          <div
            class="h-fit w-full rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-4 activities"
          >
            <div>
              <div
              class="flex gap-4 border-b-solid border-b-2 border-b-black pb-2"
            >
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

              <h1>MY DATASETS</h1>
            </div>  
     <research-paper-small></research-paper-small>
     <research-paper-small></research-paper-small>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyForumCards from './cards/MyForumCards.vue';
import ResearchPaperSmall from './cards/ResearchPaperSmall.vue';
export default {
  components: { ResearchPaperSmall, MyForumCards },};
</script>

<style>
</style>