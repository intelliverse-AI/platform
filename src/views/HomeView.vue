<template>
  <div class="bg-[#ECF9FF]">
    <nav-bar></nav-bar>
    <main class="container mx-auto px-5 lg:px-24">
      <section class="banner flex flex-col md:flex-row">
        <div class="banner-container basis-2/2 md:basis=1/3">
          <div class="bn-text mt-10">
            <div class="bn-txt-holder">
              <h1 class="text-[32px] md:text-[48px]">
                Pioneering Collaborative
                <span>Artifical Intelligence</span> Research and Innovation
                across Africa
              </h1>
              <p>
                Join a collaborative research hub and innovation ecosystem
                focusing on developing AI solutions tailored for Africa's unique
                challenges.
              </p>
              <div class="bn-btns">
                <router-link to="/register">
                  <button class="find-btn">
                    Join Intelliverse
                  </button></router-link
                >
              </div>
            </div>
          </div>
          <div class=""></div>
        </div>
        <div class="basis-2/2 md:basis-2/3 mt-5">
          <div class="flex justify-end">
            <img
              src="/images/hero/hero-1.jpg"
              alt=""
              class="w-[70%] rounded-lg object-contain mb-5"
            />
          </div>
          <div class="flex gap-5 justify-center">
            <img
              src="/images/hero/hero-2.jpg"
              alt=""
              class="w-[45%] rounded-lg"
            />
            <img
              src="/images/hero/hero-6.jpg"
              alt=""
              class="rounded-lg w-[45%] object-contain"
            />
          </div>
        </div>
      </section>
      <section class="community-talent">
        <div class="community-talent-contain container">
          <div class="ctc-content">
            <div class="ctc-card">
              <h3>AI Researchers Registered</h3>
              <p class="hidden-paragraph">1500+</p>
            </div>

            <hr
              class="w-full h-0.5 md:h-40 md:w-0 border-solid border-white border-[1px]"
            />

            <div class="ctc-card">
              <h3>Research Papers Published</h3>
              <p class="hidden-paragraph">200+</p>
            </div>
            <hr
              class="w-full h-0.5 md:h-40 md:w-0 border-solid border-white border-[1px]"
            />
            <div class="ctc-card">
              <h3>Collaborative Research Partners</h3>
              <p class="hidden-paragraph">30+</p>
            </div>
            <hr
              class="w-full h-0.5 md:h-40 md:w-0 border-solid border-white border-[1px]"
            />
            <div class="ctc-card">
              <h3>AI Research Projects</h3>
              <p class="hidden-paragraph">20</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="flex flex-col-reverse md:flex-row justify-between community gap-10 items-center"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:basis-1/2">
            <div class="card rounded">
              <div class="flex items-center mb-2">
                <img
                  src="/images/Hackathon/management-team.svg"
                  alt="Hackathon"
                />
                <h4>Research Papers</h4>
              </div>
              <p>
                Unified workspace to Post, update, and collaborate on new and
                existing peer-reviewed AI research papers and projects
              </p>
            </div>
            <div class="card rounded">
              <div class="flex items-center mb-2">
                <img
                  src="/images/Hackathon/analysis-support.svg"
                  alt="Hackathon"
                />
                <h4>Data repository</h4>
              </div>
              <p>
                Find Comprehensive data sets from our community to work with on
                your AI research projects
              </p>
            </div>
            <div class="card rounded">
              <div class="flex items-center mb-2">
                <img
                  src="/images/Hackathon/team-creation.svg"
                  alt="Hackathon"
                />
                <h4>AI Models &amp;Copyrights</h4>
              </div>
              <p>
                Discover trained, ready-to-deploy machine learning models and
                get copyrights for your own models
              </p>
            </div>
            <div class="card rounded">
              <div class="flex items-center mb-2">
                <img
                  src="/images/Hackathon/design-support.svg"
                  alt="Hackathon"
                />
                <h4>Research prpojects</h4>
              </div>
              <p>
                Grow your skills and earn by participating in academic and paid AI research prpojects.
              </p>
            </div>
          </div>
          <div class="text basis-1/2">
            <h3>Plug Into Intelliverse</h3>
            <p>
              Intelliverse is a collaborative AI research platform and
              innovation ecosystem that empowers AI Researchers, AI engineers,
              data scientists, Machine Learning Engineers, and Data Engineers
              across Africa with the tools, datasets, and vibrant community they
              need to build AI solutions to solve some of the continent’s most
              pressing challenges. Our Community-first approach ensures that
              researchers and engineers understand the needs and challenges
              facing the African Continent, collaboratively publish
              peer-reviewed whitepapers and develop solutions that are relevant
              and effective.
            </p>
          </div>
        </div>
      </section>
      <section class="extra-info">
        <div class="extra-info-container container">
          <div class="text">
            <div class="text-hold">
              <h3>
                Take Part in AI Research Projects Shaping the Future of African
                Continent
              </h3>
              <a href="#" class="rounded-lg">Join The Hub</a>
            </div>
          </div>
        </div>
      </section>
      <section class="innovation-sect" id="partners">
        <div class="innovation-sect-container container mx-auto">
          <div class="innovate-head">
            <h1 class="upppercase">Bring Your <span class="text-[#E58E04]">Artificial Intelligence Ideas</span> To Life Faster</h1>
              <p>Through strategic partnerships and a deep understanding of the African
          narrative, Intelliverse aims to transform challenges into
          opportunities, ensuring that the African continent can harness the
          true power of Artificial Intellignce in solving the most pressing
          challenges. Private enterprises and public institutions can join the
          platform to host AI research challenges to be tackled by our ever
          growing community of AI researchers</p>
          </div>
          <div class="innovate-content grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="innovate-card">
              <img
                class="image-one"
                src="/images/Hackathon/hackathons-icon.svg"
                alt="Hackerthon"
              />
              <h2>Active Community</h2>
              <p>
                Engaging a vibrant community of 15000+ AI researchers across
                Africa to come up with the research papers for your next AI
                project
              </p>
              <br />
              <button><a href="/register">Request a demo</a></button>
            </div>
            <div class="innovate-card">
              <img
                class="image-one"
                src="/images/Hackathon/hiring-challenges-icon.svg"
                alt="Hackerthon"
              />
              <h2>START A PROJECT</h2>
              <p>
                Get innovative individuals and teams collaborate on your AI solutions by starting a research project on intelliverse
              </p>
              <br />
              <button><a href="/register">Request a demo</a></button>
            </div>
            <div class="innovate-card">
              <img
                class="image-one"
                src="/images/Hackathon/evaluation.svg"
                alt="Hackerthon"
              />
              <h2>Data Contributers</h2>
              <p>
                Universities,NGOs,and Governments,Private Enterprises can contribute datasets to help foster AI research and jointly build better AI models and solutions
              </p>

              <br />
              <button><a href="/register">Speak to Our Team</a></button>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="sectors py-10" id="challenges">
        <h1 class="md:mx-20 md:my-5">
          Take Part in AI Research Projects Shaping the Future of African
          Continent
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="rounded-lg p-10 card">
            <h2>AI-Driven Agricultural Optimization</h2>
            <p>
              Develop an AI-powered platform that provides farmers with
              real-time data on soil health, weather patterns, and pest
              activity. This platform could offer actionable insights on when to
              plant, irrigate, and harvest.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Increase crop
              yields, reduce resource wastage, and enhance food security across
              the continent
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
          <div class="rounded-lg p-10 card">
            <h2>Remote Healthcare Diagnostics</h2>
            <p>
              AI-driven telemedicine platforms that can diagnose common diseases
              by analyzing symptoms, medical images, and patient history.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Provide accessible
              healthcare solutions to remote areas, reducing the burden on urban
              healthcare centers and providing timely interventions.
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
          <div class="rounded-lg p-10 card">
            <h2>AI-Powered Educational Platforms</h2>
            <p>
              Develop an adaptive learning system that personalizes educational
              content based on a student's learning pace, style, and language
              preference.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Enhance the
              quality of education, especially in underserved regions, and
              reduce the educational gap.
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
          <div class="rounded-lg p-10 card">
            <h2>Smart City Solutions for Urban Development</h2>
            <p>
              Implement AI-driven traffic management and public transportation
              optimization systems in growing cities.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Reduce congestion,
              improve public transportation efficiency, and enhance the overall
              quality of urban life.
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
          <div class="rounded-lg p-10 card">
            <h2>Financial Inclusion Initiatives</h2>
            <p>
              Design an AI-based platform that offers microloans, savings, and
              insurance products tailored to the financial behaviors and needs
              of the unbanked population.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Boost economic
              growth by providing financial services to underserved communities,
              fostering entrepreneurship, and enhancing financial literacy.
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
          <div class="rounded-lg p-10 card">
            <h2>AI powered E-Governance and Public Feedback Systems</h2>
            <p>
              Create an AI-driven platform where citizens can provide feedback
              on public services, report issues, and access government services
              online.
            </p>
            <hr
              class="h-0 w-full border-solid border-gray-500 border-[1px] my-5"
            />
            <p>
              <span class="text-[#E58E04] mr-2">Impact:</span>Enhance
              transparency, improve public services, and foster a sense of
              community involvement.
            </p>
            <router-link to="register">
              <button
                class="find-btn text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
              >
                Join The Hub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
      </section> -->
      <!-- <section class="py-10 global" id="partners">
        <h1 class="md:mx-20 md:my-5">Global Enterprise Network</h1>
        <p class="md:mx-20 md:my-5">
          Through strategic partnerships and a deep understanding of the African
          narrative, Intelliverse aims to transform challenges into
          opportunities, ensuring that the African continent can harness the
          true power of Artificial Intellignce in solving the most pressing
          challenges. Private enterprises and public institutions can join the
          platform to host AI research challenges to be tackled by our ever
          growing community of AI researchers
        </p>
        <div class="flex items-center w-full justify-center">
          <router-link to="/partner-network">
            <button
              class="bg-[#1f2d41] hover:bg-[#E58E04] text-white uppercase flex items-center gap-3 py-2 px-5 rounded-lg"
            >
              Become a Partner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M13 14L11.575 12.6L16.175 8H0V6H16.175L11.6 1.4L13 0L20 7L13 14Z"
                  fill="#FCFCFC"
                />
              </svg>
            </button>
          </router-link>
        </div>
        <img src="/images/global.png" alt="" />
      </section> -->
    </main>
    <section class="newsletter">
      <div
        class="newsletter-contain container flex flex-col md:flex-row items-center justify-evenly"
      >
        <div class="text">
          <div class="img">
            <i class="fa-brands fa-telegram"></i>
          </div>
          <div class="news-txt">
            <span
              >WANT TO GET LATEST AI RESEARCH UPDATES! SIGN UP FOR FREE.</span
            >
            <h1>SUBSCRIBE NEWSLETTER !</h1>
          </div>
        </div>
        <div class="form">
          <form class="newsletter" @submit.prevent="handleSubmit">
            <input
              type="text"
              placeholder="Enter Email Address"
              v-model="email"
            />
            <button type="submit">
              {{ loading ? "loading" : "Subscribe" }}
            </button>
          </form>
        </div>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from "@/components/utils/NavBar.vue";
import FooterComponent from "@/components/utils/FooterComponent.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
    };
  },
  components: {
    NavBar,
    FooterComponent,
  },
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("sendMail", {
        name: "Newsletter Subscriptions",
        email: "ochiengwarren10@gmail.com,info@intelliverseai.com",
        subject: "Newsletter Subscriptions",
        content: `${this.email},`,
        link: `info@intelliverseai.com`,
      });
    },
  },
};
</script>

<style></style>
