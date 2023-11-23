<template>
  <div class="dash-content-displayed">
    <div id="challenges-content">
      <div class="dash-main-cards">
        <div class="flex flex-col md:flex-row gap-5">
          <div class="basis-1/3 space-y-4">
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-2"
            >
              <div class="intro-text dci">
                <div class="flex items-center justify-between">
                  <h1 class="font-bold">My Projects</h1>
                  <div class="flex gap-2">
                  <router-link to="/dashboard/hub/startproject" class="flex rounded-lg border-solid border-2 border-[#e58e0] px-2 hover:border-[#E58E04]" active-class="border-[#E58E04]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 Create
                  </router-link>
<router-link to="/dashboard/hub/overview" class="flex border-solid border-2 border-[#e58e0] px-2 rounded-lg hover:border-[#E58E04]">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#697077" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>View
</router-link>

      </div>
                </div>
                <p>
                 Get a community,datasets and tools to help you develop and track progress of research project.
                </p>
     
              </div>
            </div>
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-2"
            >
              <div class="intro-text dci">
                <div class="flex items-center justify-between">
                  <h1 class="font-bold">My Research Papers</h1>
                  <div class="flex gap-2">
                  <router-link to="/dashboard/hub/publish" class="flex rounded-lg border-solid border-2 border-[#e58e0] px-2 hover:border-[#E58E04]" active-class="border-[#E58E04]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 Publish
                  </router-link>
<router-link to="/dashboard/publish" class="flex border-solid border-2 border-[#e58e0] px-2 rounded-lg hover:border-[#E58E04]">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#697077" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>View
</router-link>

      </div>
                </div>
                <p>
                  Publish an AI research paper, get peers review and collaborate on your work. Gain Global recognition
                </p>
               
              </div>
            </div>
        
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-2"
            >
              <div class="intro-text dci">
                <div class="flex items-center justify-between">
                  <h1 class="font-bold">My Datasets</h1>
                  <div class="flex gap-2">
                  <router-link to="/dashboard/publish" class="flex rounded-lg border-solid border-2 border-[#e58e0] px-2 hover:border-[#E58E04]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 Upload
                  </router-link>
<router-link to="/dashboard/publish" class="flex border-solid border-2 border-[#e58e0] px-2 rounded-lg hover:border-[#E58E04]">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#697077" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>View
</router-link>

      </div>
                </div>
                <p>
                   Upload opensource or proprietary datasets to our repository.
                </p>        
              </div>
            </div>
            <div
              class="h-fit rounded-lg shadow-md border-solid border-2 border-[#EDE9E4] p-2"
            >
              <div class="intro-text dci">
                <div class="flex items-center justify-between">
                  <h1 class="font-bold">Licenses and Copyright</h1>
                  <div class="flex gap-2">
                  <router-link to="/dashboard/publish" class="flex rounded-lg border-solid border-2 border-[#e58e0] px-2 hover:border-[#E58E04]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 Create
                  </router-link>
<router-link to="/dashboard/publish" class="flex border-solid border-2 border-[#e58e0] px-2 rounded-lg hover:border-[#E58E04]">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#697077" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>View
</router-link>

      </div>
                </div>
               
                <p>
                 Do you have research work you'd want to obtain intellectual property.Apply for a Copyright or license with us
                </p>
              </div>
            </div>
          </div>
          <div class="basis-2/3">
            <router-view></router-view>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style>
</style>