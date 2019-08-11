<template>
    <header class="nav-fix-top">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <router-link class="navbar-brand logo" to="#">
                    <img class="w-100" src="../assets/logo.png" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="#">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">Pricing</router-link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>