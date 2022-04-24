<script>
export default {
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <router-link class="navbar-brand" :to="{ name: 'home-page', }">Blog Project</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" :to="{ name: 'home-page', }">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" :to="{ name: 'edit-page', }">Edit</router-link></li>
                    <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" :to="{ name: 'create-page', }">Create</router-link></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" @click.prevent="">My Name</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" @click.prevent="">Log Out</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

</style>
