<template>
    <div class="header-wrapper">
        <div id="top-bar" class="container">
            <ul class="top-bar-nav">
                <li>
                    <a href=""><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                </li>
                <li>
                    <a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                </li>
                <li>
                    <a href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                </li>
                <li>
                    <a href=""><font-awesome-icon :icon="['fas', 'envelope']" /></a>
                </li>
            </ul>
        </div>

        <div id="masthead" class=" container">
            <div class="logo item">
                <a href=""><img height="100px" src="@\assets\image\logo.png" alt=""></a>
            </div>
            <form action="" class="search-form item">
                <input type="search" v-model="search">
                <button type="submit"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
            </form>
            <div class="header-nav item">
                <a href="tel:0123456789" class="tel-nav">
                    <div class="icon-box">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                    </div>
                    <div class="text-box">
                        <span>TƯ VẤN 24/24</span>
                        <br>
                        <strong>0123456789</strong>
                    </div>
                </a>
                <a href="tel:0123456789" class="tel-nav">
                    <div class="icon-box">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                    </div>
                    <div class="text-box">
                        <span>BẢO HÀNH</span>
                        <br>
                        <strong>0123456789</strong>
                    </div>
                </a>
            </div>
        </div>

        <div class="header-bottom ">
            <div class="container">
                <div class="category" @mouseover="showCategory" @mouseleave="hideCategory">
                    <div class="category-menu">
                        <div class="icon">
                            <font-awesome-icon :icon="['fas', 'list']" />
                        </div>
                        <span>Danh mục sản phẩm</span>
                    </div>

                    <div v-if="isCategoryVisible" class="dropdown">
                        <SidebarMenu />
                    </div>
                </div>
                <ul class="header-bottom-nav">
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Trang chủ</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Giới thiệu</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Bảo hành</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Tư vấn tiêu dùng</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Tin tức</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link :to="{ name: 'home' }">Liên hệ</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue';

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            search: '',
            isCategoryVisible: false,
        };
    },
    methods: {
        showCategory() {
            this.isCategoryVisible = true;
        },
        hideCategory() {
            this.isCategoryVisible = false;
        },
        selectSubcategory(subcategory) {
            this.$emit('update-category', subcategory);
        }
    }
};
</script>

<style scoped>
.header-wrapper {
    padding: 10px;
}

/* Top Bar */
#top-bar {
    display: flex;
    justify-content: flex-end;
    /* Đẩy nội dung qua phải */
    width: 100%;
}

.top-bar-nav,
.header-bottom-nav {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
}

li {
    display: inline-block;
}

.top-bar-nav a {
    text-decoration: none;
    color: inherit;
    font-size: 16px;
}

/* Masthead */
#masthead {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#masthead .item {
    flex: 1;
    display: flex;
    align-items: center;
}

.header-bottom-nav .menu-item a {
    margin: 5px;
    color: white;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
}

.header-bottom-nav .menu-item a:hover {
    color: yellow;
}

.logo img {
    max-height: 100px;
    /* Đảm bảo logo không vượt quá chiều cao */
}

.header-bottom {
    background-color: #1e428a;
}

.header-bottom .container {
    position: relative;
    text-align: left;
    align-items: center;
    display: flex;
    min-height: 35px;
    gap: 50px;
    padding-left: 20px;
}

.category-menu {
    display: flex;
    color: white;
    cursor: pointer;

}

.category-menu .icon {
    margin-right: 10px;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    min-width: 200px;
    z-index: 1;
    padding: 10px;
}

/* Search Form */
.search-form input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 80%;
    margin-right: 5px;
}

.search-form button {
    background: #1e428a;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.category {
    background-color: #016da0;
    display: flex;
    align-items: center;
    min-height: 35px;
    padding: 0 5px;
}
.header-nav {
    display: flex;
    gap: 30px;
}

.tel-nav {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
}

.tel-nav .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #1e428a;
    color: white;
    border-radius: 50%;
}

</style>