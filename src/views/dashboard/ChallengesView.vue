<template>
     <div class="dash-content-displayed">
                    <div id="challenges-content">
                        
                        <div class="dash-main-cards">
                           <filters-component></filters-component>
                            <div class="cards">
                                <div class="card-topic">
                                    <h2><i class="fa-solid fa-arrow-trend-up"></i> Trending Challenges</h2>
                                    <button>Host A Challenge</button>
                                </div>
                                <div class="listed-list">
     
     <div class="listed-list-lists">

       <div class="list-card">
         <div class="card-left">
           <div class="card-image">
             <img src="/images/topic image.jpg" alt="hackathon" class="h-[200px] w-[250px]">
           </div>
           <div class="card-info ">
             <div class="title">
               <h2>Zephyr: Direct Distillation of LM Alignment</h2>
               <p class="paper-desc">Starting from a dataset of outputs ranked by a teacher model, we apply distilled direct preference optimization (dDPO) to learn a chat model with significantly improved intent alignment.</p>
             </div>
             <div class="card-info-extra">
               <div class="bottom">
                 <div class="bottom-left flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


                   <span><strong class="mr-1">5,500</strong>Prize</span>
                 </div>
                 <div class="bottom-right flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>


                   <span><strong class="mr-1">20</strong> Participants</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="card-right">
           <div class="layers flex items-center gap-4">
             <div class="left-layer">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

             </div>
             <div class="right-layer">
               <span class="date">
                 Microsoft
               </span>
             </div>
           </div>
           <div class=" flex items-center gap-4">
             <div class="left-layer">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

             </div>
             <div class="right-layer">
               <span class="date whitespace-nowrap">
                  Dec 04, 2023
               </span>
             </div>
           </div>
           <div class="layers">
             <div class="left-layer">
               <i class="fa-solid fa-tag"></i>
             </div>
             <div class="right-layer">
               <span class="tags"><router-link to="/dashboard/challenge/1">View All</router-link></span>
               <span class="tags">Get Datasets</span>
               <span class="tags whitespace-nowrap">Join Challenge</span>
             </div>
           </div>
         </div>
       </div>
       <div class="list-card">
         <div class="card-left">
           <div class="card-image">
             <img src="/images/topic image.jpg" alt="hackathon" class="h-[200px] w-[250px]">
           </div>
           <div class="card-info ">
             <div class="title">
               <h2>Zephyr: Direct Distillation of LM Alignment</h2>
               <p class="paper-desc">Starting from a dataset of outputs ranked by a teacher model, we apply distilled direct preference optimization (dDPO) to learn a chat model with significantly improved intent alignment.</p>
             </div>
             <div class="card-info-extra">
               <div class="bottom">
                 <div class="bottom-left flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


                   <span><strong class="mr-1">5,500</strong>Prize</span>
                 </div>
                 <div class="bottom-right flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>


                   <span><strong class="mr-1">20</strong> Participants</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="card-right">
           <div class="layers flex items-center gap-4">
             <div class="left-layer">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

             </div>
             <div class="right-layer">
               <span class="date">
                 Microsoft
               </span>
             </div>
           </div>
           <div class=" flex items-center gap-4">
             <div class="left-layer">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

             </div>
             <div class="right-layer">
               <span class="date whitespace-nowrap">
                  Dec 04, 2023
               </span>
             </div>
           </div>
           <div class="layers">
             <div class="left-layer">
               <i class="fa-solid fa-tag"></i>
             </div>
             <div class="right-layer">
               <span class="tags">View All</span>
               <span class="tags">Get Datasets</span>
               <span class="tags whitespace-nowrap">Join Challenge</span>
             </div>
           </div>
         </div>
       </div>
 
     </div>
   </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import FiltersComponent from '@/components/utils/FiltersComponent.vue'
export default {
  components: { FiltersComponent },

}
</script>

<style>

</style>