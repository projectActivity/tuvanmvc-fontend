<template>
	<div id="app">
		<div class="container">
    	<div id="div-top">
  	    <div class="row nomargin">
  	      <div id="logo" class="col-sm-4">
  	        <a href="/"><img src="/static/img/logo.png" alt="Công ty TNHH Tư Vấn M&V"></a>
    	      </div>
    	      <div class="mobile-button">
    	        <span><i class="fas fa-align-justify fa-lg"></i></span>
    	      </div>
    	      <div class="col-sm-8 div-navigation" style="padding-top: 15px;">
    	        <div class="block-lienhe">
    	          <div class="icon-lienhe"><i class="fas fa-envelope-open"></i></div>
    	          <div class="content-lienhe">
    	            <div class="content-lienhe-label">EMAIL</div>
    	            <div class="content-lienhe-data"><a href="#">@######Email</a></div>
    	          </div>
    	        </div>
    	        <div class="block-lienhe">
    	          <div class="icon-lienhe"><i class="fas fa-map-marker-alt"></i></div>
    	          <div class="content-lienhe">
    	            <div class="content-lienhe-label">ĐỊA CHỈ</div>
    	            <div class="content-lienhe-data">
    	                Số 254 - Hẻm 358/40/30<br /> Bùi Xương Trạch - Thanh Xuân - Hà
    	                Nội
    	            </div>
    	          </div>
    	        </div>
    	        <div class="block-lienhe">
    	          <div class="icon-lienhe"><i class="fas fa-phone" data-fa-transform="rotate-180"></i></div>
    	          <div class="content-lienhe">
    	            <div class="content-lienhe-label">HOTLINE</div>
    	            <div class="content-lienhe-data"><a href="#">@######SDT</a></div>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    		</div>
    		<div id="div-menu">
    	    <ul>
    	      <li class="active"><router-link :to="{ name: 'home' }">Trang Chủ</router-link></li>
    	      <li class="dichvu">
    	        <a href="###">Giới Thiệu</a>
    	        <ul class="menu-child">
    	          <li class=""><router-link :to="{ name: 'about' }">Giới thiệu về công ty</router-link></li>
    	          <li class=""><router-link :to="{ name: 'about' }">Chính sách khách hàng</router-link></li>
    	          <li class=""><router-link :to="{ name: 'about' }">Quy trình làm việc</router-link></li>
    	          <li class=""><router-link :to="{ name: 'about' }">Luật sư hợp tác</router-link></li>
    	        </ul>
    	      </li>
    	      <li class="dichvu">
    	        <a href="###">Dịch vụ</a>
    	        <ul class="menu-child">
    	          <li class="" v-for="category in isDisplayCategories"><router-link :to="{ name: 'service' }">{{ category.title }}</router-link></li>
    	        </ul>
    	      </li>
    	      <li class=""><router-link :to="{ name: 'news' }">Tin Tức</router-link></li>
    	      <li class=""><router-link :to="{ name: 'question' }">Hỏi Đáp</router-link></li>
    	      <li class=""><router-link :to="{ name: 'document' }">Văn Bản Pháp Luật</router-link></li>
    	      <li class=""><router-link :to="{ name: 'calendar' }">Đặt lịch tư vấn</router-link></li>
    	      <li class=""><router-link :to="{ name: 'contact' }">Liên Hệ</router-link></li>
    	    </ul>

    	    <div id="div-search" class="pull-right">
    	      <div class="searchBox">
    	        <input type="text" id="searchInput" placeholder="Tìm kiếm ...">
    	        <button><i class="fas fa-search"></i></button>
    	      </div>
    	        
    	    </div>
    		</div>
      
          <router-view></router-view>


    	<footer>
  	    <div class="row nomargin">
  	      <div class="col-sm-4 center cty-logo">

  	        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FtuvanphapluatmienphiMV%2F&tabs=message&width=350&height=800&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="350" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <!-- https://www.facebook.com/tuvanphapluatmienphiMV/ -->
  	      </div>
  	      <div class="col-sm-4">
  	        <h2 class="tencongty">Công ty TNHH Tư Vấn M&V</h2>
  	        <div class="cty-info"><i class="fas fa-map-marker-alt"></i> <strong>Địa chỉ:</strong>  Số 254 - Hẻm 358/40/30 - Bùi Xương Trạch - Thanh Xuân - Hà Nội</div>
  	        <div class="cty-info">
  	            <i class="fas fa-envelope"></i> <strong>Email:</strong>
  	            tuvan.mvc@gmail.com
  	        </div>
  	        <div class="cty-info">
  	            <i class="fas fa-phone"></i> <strong>Điện thoại:</strong>
  	            090-181-7766
  	        </div>

  	      </div>
  	      <div class="col-sm-4 ft-dichvu">
  	        <h3 class="tencongty">Dịch vụ</h3>
  	        <ul>
  	          <li class="" v-for="category in isDisplayCategories"><a :href="category.link">{{ category.title }}</a></li>
  	        </ul>
  	      </div>
  	    </div>
    	</footer>
  	</div>
  </div>
</template>

<script>
	import {HTTP} from '@/http-common';

	export default {
		name: 'master',
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