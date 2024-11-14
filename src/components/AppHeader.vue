<template>
    <div class="header">
        <div class="container">
            <div class="in">
                <div class="item">
                    <router-link to="/">
                        <div class="logo">
                            <img src="https://dienlanhpt.lvtweb.net/wp-content/uploads/2023/04/logo-dien-lanh-kim-phat.png" alt="">
                        </div>
                    </router-link>
                </div>
                <div class="item">
                    <div class="search">
                        <input type="text" placeholder="Search">
                    </div>
                </div>
                <div class="item"></div>
            </div>
            
        </div>
        
    </div>
</template>

<script></script>

<style scoped>
.header {
    background-color: #016da0 ;
}

.in {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo img {
    height: 80px;
    margin: 10px 20px;
    border-radius: 20px;
}

.item {
    align-items:self-start;
}

.div {
    display: inline;
}

input {
    padding: 3px;
    border-radius: 10px;
}

a {
  text-decoration: none;
  color: black;
}

</style>