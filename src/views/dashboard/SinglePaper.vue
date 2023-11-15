<template>
  <div class="single-page mt-4">
    <div class="single-pg-content">
      <div class="spc-top">
        <div class="spc-top-overlay">
          <div class="competition-top">
            <span class="compe-status"
              ><i class="fa-solid fa-tag"></i> Featured Challenge</span
            >
            <div class="title-price">
              <div class="title">
                <h1>Open Problems – Single-Cell Perturbations</h1>
                <p>
                  Predict how small molecules change gene expression in
                  different cell types
                </p>
              </div>
              <div class="pricing">
                <h3>$100, 000</h3>
                <p>Prize money</p>
              </div>
            </div>
            <div class="compe-in-info">
              <span>221 teams 2 months to go</span>
            </div>
          </div>
        </div>
      </div>
      <div class="competition-tabs-join-btn">
        <div class="tabs">
          <button
            :class="{
              'btn-tabbed-competition active-tab-btn': activeTab === 'overview',
              'btn-tabbed-competition': activeTab !== 'overview',
            }"
            @click="
              () => {
                changetab('overview');
              }
            "
          >
            Overview
          </button>
          <button
            :class="{
              'btn-tabbed-competition active-tab-btn': activeTab === 'data',
              'btn-tabbed-competition': activeTab !== 'data',
            }"
            @click="
              () => {
                changetab('data');
              }
            "
          >
            Datasets
          </button>
          <button
            :class="{
              'btn-tabbed-competition active-tab-btn': activeTab === 'rules',
              'btn-tabbed-competition': activeTab !== 'rules',
            }"
            @click="
              () => {
                changetab('rules');
              }
            "
          >
            Code
          </button>
          <button
            :class="{
              'btn-tabbed-competition active-tab-btn':
                activeTab === 'discussion',
              'btn-tabbed-competition': activeTab !== 'discussion',
            }"
            @click="
              () => {
                changetab('discussion');
              }
            "
          >
            Reviews
          </button>
          <button
            :class="{
              'btn-tabbed-competition active-tab-btn':
                activeTab === 'leaderboard',
              'btn-tabbed-competition': activeTab !== 'leaderboard',
            }"
            @click="
              () => {
                changetab('leaderboard');
              }
            "
          >
            Licences
          </button>
        </div>
        <div class="btn-join">
          <button>Collaborate on this Paper</button>
        </div>
      </div>
      <div class="spc-content">
        <div
          :class="{
            'overview-tab tabs-content spc active-tab':
              activeTab === 'overview',
            'overview-tab tabs-content spc': activeTab !== 'overview',
          }"
          id="overview"
        >
          <div class="overview-tab-container">
            <div class="left tabs-nav">
              <button class="accordion-button" id="overview-tab-content">
                LCM-LoRA: A Universal Stable-Diffusion Acceleration Module
              </button>
              <h3>
                9 Nov 2023 · Simian Luo, Yiqin Tan, Suraj Patil, Daniel Gu,
                Patrick von Platen, Apolinário Passos, Longbo Huang, Jian Li,
                Hang Zhao
              </h3>
              <div class="accordion-content active-acc">
                <p>
                  The goal of this competition is to predict how small molecules
                  change gene expression in different cell types.
                </p>
                <p>
                  Your work will help develop methods to predict how cells
                  respond to small molecule drug perturbations, which could have
                  important applications in drug discovery and basic biology.
                </p>
              </div>
              <button class="accordion-button" id="overview-tab-content">
                ABSTRACT
              </button>
              <div class="accordion-content active-acc">
                <p>
                  The goal of this competition is to predict how small molecules
                  change gene expression in different cell types.
                </p>
                <p>
                  Your work will help develop methods to predict how cells
                  respond to small molecule drug perturbations, which could have
                  important applications in drug discovery and basic biology.
                </p>
              </div>

              <button class="accordion-button" id="description-tab-content">
                RESOURCES
              </button>
              <div class="flex items-center paper-overview">
                <button class="btn-download">DOWNLOAD PDF</button>
                <button class="btn-citation">GET CITATION</button>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{
            'data-tab tabs-content spc active-tab': activeTab === 'data',
            'data-tab tabs-content': activeTab !== 'data',
          }"
          id="data"
        >
          <div class="overview-tab-container">
            <div class="left tabs-nav my-4">
              <div
                class="border-b-2 border-b-black border-b-solid flex justify-between"
              >
                <div>
                  <button class="accordion-button" id="overview-tab-content">
                    The CIFAR-10 dataset
                  </button>
                  <p>
                    The CIFAR-10 dataset (Canadian Institute for Advanced
                    Research, 10 classes) is a subset of the Tiny Images dataset
                    and consists of 60000 32x32 color images. The images are
                    labelled with one of 10 mutually exclusive classes:
                    airplane, automobile (but not truck or pickup truck), bird,
                    cat, deer, dog, frog, horse, ship, and truck (but not pickup
                    truck). There are 6000 images per class with 5000 training
                    and 1000 testing images per class.
                  </p>
                </div>
                <div class="flex items-center paper-overview">
                  <button class="btn-citation">USE DATASET</button>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-tab-container">
            <div class="left tabs-nav my-4">
              <div
                class="border-b-2 border-b-black border-b-solid flex justify-between"
              >
                <div>
                  <button class="accordion-button" id="overview-tab-content">
                    The CIFAR-10 dataset
                  </button>
                  <p>
                    The CIFAR-10 dataset (Canadian Institute for Advanced
                    Research, 10 classes) is a subset of the Tiny Images dataset
                    and consists of 60000 32x32 color images. The images are
                    labelled with one of 10 mutually exclusive classes:
                    airplane, automobile (but not truck or pickup truck), bird,
                    cat, deer, dog, frog, horse, ship, and truck (but not pickup
                    truck). There are 6000 images per class with 5000 training
                    and 1000 testing images per class.
                  </p>
                </div>
                <div class="flex items-center paper-overview">
                  <button class="btn-download">BUY DATASET</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{
            'data-tab tabs-content spc active-tab': activeTab === 'discussion',
            'data-tab tabs-content': activeTab !== 'discussion',
          }"
          id="discussion"
        >
          <div class="dash-content-displayed">
            <div id="discussion-content">
              <div class="dash-main-cards">
                <div class="discussion-cards">
                  <div class="discussion">
                    <div class="left">
                      <div class="profile-img">
                        <img
                          src="/images/profile image.png"
                          alt="AfroAI Innovate"
                        />
                      </div>
                      <div class="topic-discussed">
                        <a href="#">Bonus 40k Dataset - Boost CV and LB</a>
                        <p>
                          Chris Deotte · in Kaggle - LLM Science Exam · Last
                          comment 3h ago by ZONGXIAO YING
                        </p>
                      </div>
                    </div>
                    <div class="right">
                      <span>44 Comments</span>
                    </div>
                  </div>
                  <div class="discussion">
                    <div class="left">
                      <div class="profile-img">
                        <img
                          src="/images/profile image.png"
                          alt="AfroAI Innovate"
                        />
                      </div>
                      <div class="topic-discussed">
                        <a href="#">Bonus 40k Dataset - Boost CV and LB</a>
                        <p>
                          Chris Deotte · in Kaggle - LLM Science Exam · Last
                          comment 3h ago by ZONGXIAO YING
                        </p>
                      </div>
                    </div>
                    <div class="right">
                      <span>44 Comments</span>
                    </div>
                  </div>
                  <div class="discussion">
                    <div class="left">
                      <div class="profile-img">
                        <img
                          src="/images/profile image.png"
                          alt="AfroAI Innovate"
                        />
                      </div>
                      <div class="topic-discussed">
                        <a href="#">Bonus 40k Dataset - Boost CV and LB</a>
                        <p>
                          Chris Deotte · in Kaggle - LLM Science Exam · Last
                          comment 3h ago by ZONGXIAO YING
                        </p>
                      </div>
                    </div>
                    <div class="right">
                      <span>44 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{
            'leaderboard-tab tabs-content spc active-tab':
              activeTab === 'leaderboard',
            'leaderboard-tab tabs-content': activeTab !== 'leaderboard',
          }"
          id="leaderboard"
        >
          <h2>LeaderBoad</h2>
          <p>The top of the top among the top 1%</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Team</th>
                <th>Image</th>
                <th>Score</th>
                <th>Entries</th>
                <th>Last</th>
                <th>Join</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Team A</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 1" />
                  </div>
                </td>
                <td>0.233</td>
                <td>5</td>
                <td>16h</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Team B</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 2" />
                  </div>
                </td>
                <td>0.567</td>
                <td>7</td>
                <td>5h</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Team C</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 3" />
                  </div>
                </td>
                <td>0.874</td>
                <td>3</td>
                <td>2d</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Team D</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 4" />
                  </div>
                </td>
                <td>0.321</td>
                <td>6</td>
                <td>1w</td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Team E</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 5" />
                  </div>
                </td>
                <td>0.425</td>
                <td>4</td>
                <td>3d</td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Team F</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 6" />
                  </div>
                </td>
                <td>0.654</td>
                <td>8</td>
                <td>4h</td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Team G</td>
                <td>
                  <div class="circle">
                    <img src="/images/panda.png" alt="Team Image 7" />
                  </div>
                </td>
                <td>0.987</td>
                <td>2</td>
                <td>1d</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          :class="{
            'rules-tab tabs-content spc active-tab': activeTab === 'rules',
            'rules-tab tabs-content': activeTab !== 'rules',
          }"
          id="rules"
        >
          <div
            class="border-b-2 border-b-black border-b-solid flex justify-between"
          >
            <a href="#">huggingface/datasets (cifar10-lt)</a>
            <div class="flex items-center gap-1">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p><span class="text-[#E58E04] mr-1">6,000</span>Github Stars</p>
            </div>
            <div class="flex items-center gap-1">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">

            </div>
          </div>
          <div
            class="border-b-2 border-b-black border-b-solid flex justify-between"
          >
            <a href="#">huggingface/datasets (cifar10-lt)</a>
            <div class="flex items-center gap-1">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p><span class="text-[#E58E04] mr-1">6,000</span>Github Stars</p>
            </div>
            <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>

                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">

            </div>
          </div>
          <div
            class="border-b-2 border-b-black border-b-solid flex justify-between"
          >
            <a href="#">huggingface/datasets (cifar10-lt)</a>
            <div class="flex items-center gap-1">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p><span class="text-[#E58E04] mr-1">6,000</span>Github Stars</p>
            </div>
            <div class="flex items-center gap-1">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">
                <img src="/images/profile image.png" alt="contributer" class="rounded-full h-8 w-8 -ml-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      activeTab: "overview",
    };
  },
  methods: {
    changetab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
  
  <style>
</style>