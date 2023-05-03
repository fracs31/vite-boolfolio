<!-- JavaScript -->
<script>
</script>

<!-- Template -->
<template>
    <!-- Header -->
    <header class="main-header">
        <!-- Container -->
        <div class="container">
            <!-- Navbar -->
            <nav class="navbar">
                <!-- Lista -->
                <ul class="navbar__list">
                    <!-- Home -->
                    <li class="navbar__list-item">
                        <!-- Rotta -->
                        <router-link :to="{ name: 'home' }">
                            Home
                        </router-link>
                    </li>
                    <!-- Portfolio -->
                    <li class="navbar__list-item">
                        <!-- Rotta -->
                        <router-link :to="{ name: 'portfolio' }">
                            Portfolio
                        </router-link>
                    </li>
                    <!-- Chi sono -->
                    <li class="navbar__list-item">
                        <!-- Rotta -->
                        <router-link :to="{ name: 'about-me' }">
                            Chi sono
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<!-- CSS -->
<style scoped>
    /* Navbar */
    .navbar {
        padding: 20px 0px;
    }
    /* Lista della Navbar */
    .navbar__list {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    /* Elementi della lista della Navbar */
    .navbar__list-item {
        cursor: pointer;
    }
</style>