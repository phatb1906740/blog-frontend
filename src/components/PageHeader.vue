<template>
    <header class="masthead" :style="`background-image: url('${bg}')`">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div :class="className">
                        <h1>{{ title }}</h1>
                        <span class="subheading">{{ subHeading }}</span>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        className: { type: String, default: 'site-heading'},
        bg: { type: String, default: 'assets/img/home-bg.jpg'},
        title: { type: String, default: 'Home Page'},
        subHeading: { type: String, default: 'A Blog Theme by Start Bootstrap'},
    },
}
</script>

<style>

</style>
