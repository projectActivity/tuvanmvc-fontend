<template>
	<div id="div-menu">
    <ul>
      <li class="active"><a href="###">Trang Chủ</a></li>
      <li class="dichvu">
        <a href="###">Giới Thiệu</a>
        <a href="###">Dịch vụ</a>
        <ul class="menu-child">
          <li class=""><a href="###">Giới thiệu về công ty</a></li>
          <li class=""><a href="###">Chính sách khách hàng</a></li>
          <li class=""><a href="###">Quy trình làm việc</a></li>
          <li class=""><a href="###">Luật sư hợp tác</a></li>
        </ul>
      </li>
      <li class="dichvu">
        <a href="###">Dịch vụ</a>
        <ul class="menu-child">
          <li class="" v-for="category in isDisplayCategories"><a :href="category.link">{{ category.title }}</a></li>
        </ul>
      </li>
      <li class=""><a href="###">Tin Tức</a></li>
      <li class=""><a href="###">Hỏi Đáp</a></li>
      <li class=""><a href="###">Văn Bản Pháp Luật</a></li>
      <li class=""><a href="###">Đặt lịch tư vấn</a></li>
      <li class=""><a href="###">Liên Hệ</a></li>
    </ul>

    <div id="div-search" class="pull-right">
      <div class="searchBox">
        <input type="text" id="searchInput" placeholder="Tìm kiếm ...">
        <button><i class="fas fa-search"></i></button>
      </div>
        <!-- <div id="searchResultQuick"> -->
            <!-- @*<div class="searchItem">
                  <a href="/">
                    <div class="row nomargin">
                      <div class="col-sm-3 nopadding img">
                        <img src="/uploads/" onerror="this.src = '/img/ImgNotFound.png'" />
                      </div>
                      <div class="col-sm-9 nopadding">
                        <div class="title">
                            Vu Xuan Hoan
                        </div>
                        <div class="description">
                            Vu Xuan Hoan  Vu Xuan Hoan  Vu Xuan Hoan
                        </div>
                      </div>
                    </div>
                  </a>
                </div>*@ -->
        <!-- </div> -->
    </div>
	</div>
</template>

<script>
	import {HTTP} from '../../http-common';

	export default {
		name: 'navbar',
		data() {
			return {
				categories: []
			}
		},
		created() {
			this.fetchCategories()
		},
		computed: {
			isDisplayCategories: function () {
				return this.categories.filter(function (category) {
					return category.is_display
				})
			},
		},
		methods: {
			fetchCategories() {
				HTTP.get('categories')
					.then(response => (this.categories = response.data.data))
			}
		}
	}
</script>

<style scoped>
	
</style>
