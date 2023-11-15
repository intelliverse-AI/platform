<template>
   <div class="dash-side-nav">
                <div class="links nav">
                    <button class="link">
                        <div class="icon menu-btn">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div class="text">
                            <span class="dash-logo">
                                <img src="/images/logo.png" alt="logo" class="h-20 w-20 object-contain">
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
                    <router-link class="link btn-content" to="/dashboard/research-papers" active-class="active">
                        <div class="icon">
                            <i class="fa-solid fa-table"></i>
                        </div>
                        <div class="text">
                            <span>Research Papers</span>
                        </div>
                    </router-link>
                    <router-link class="link btn-content " to="/dashboard/challenges" active-class="active">
                        <div class="icon">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div class="text">
                            <span>Challenges</span>
                        </div>
                    </router-link>
                   
                    <router-link class="link btn-content" to="/dashboard/datasets" active-class="active">
                        <div class="icon">
                            <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div class="text">
                            <span>Datasets</span>
                        </div>
                    </router-link>
                    <router-link class="link btn-content" to="/dashboard/forums" active-class="active">
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
export default {

}
</script>

<style>

</style>