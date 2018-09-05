<template>
	<div>
		<h1 class="hide">Công ty TNHH Tư Vấn M&V</h1>

		<div id="div-slide" class="row nomargin">
	    <div id="block-slider" class="col-sm-7 nopadding">
        <div id="carousel-top" class="carousel slide" data-ride="carousel">
          
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
              <div v-for="slide in isDisplaySlides" :key="slide.id" class="item" :class="{ active: isActive(slide) }">
                <img :src="slide.image" :alt="slide.image">
              </div>
          </div>
          
          <a class="left carousel-control" href="#carousel-top" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-top" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
	    </div>

			<div id="block-tintuc" class="col-sm-5">
		    <div class="block-tintuc-title">
		      <div class="heading">Tin Tức mới nhất</div>
		    </div>
		    <div>
          <div class="block-tintuc-item">
            
          </div>
        </div>
	    </div>

		</div>

		<div id="div-hosocongty">
	    <div class="div-heading">
	        <i class="fas fa-building fa-lg" style="color: #f8983b"></i> Hồ Sơ Công Ty
	    </div>
	    <div class="div-hosocongty-content row nomargin">
        <div class="col-sm-7">
          <img src="/static/img/company-name.png" />
        </div>
        <div class="col-sm-5">
          <div class="title">Thông Tin Chung</div>
          <div class="description">
              Thưa Quý khách hàng! Mang trên mình “sứ mệnh mới” và với một “tầm nhìn mới” Công ty TNHH Tư vấn M&V
              (M&V Consultancy) đã và đang là sự lựa chọn đáng tin cậy của Quý khách hàng nhờ có đội ngũ Luật sư,
              chuyên viên tư vấn với chuyên môn cao, kinh nghiệm làm việc dày dặn. Bên cạnh đó, M&V Consultancy
              cũng cung cấp TẤT CẢ dịch vụ pháp lý với nhiều lĩnh vực từ tư vấn thành lập doanh nghiệp, mua bán,
              sáp nhập doanh nghiệp (M&A), hòa g...
          </div>
          <a href="###" class="btn btn-info readmore">
              Xem thêm <i class="fas fa-angle-double-right"></i>
          </a>
        </div>
	    </div>
		</div>

		
  </div>
</template>

<script>
	import {HTTP} from '@/utils/http-common'

	export default {
		name: 'home-mvc',
		data() {
			return {
				slides: [],
				service: [],
			}
		},

		created() {
			this.fetchSlides()
		},

		computed: {
			isDisplaySlides: function () {
				return this.slides.filter(function (slide) {
					return slide.is_display
				})
			},
		},

		methods: {
			fetchSlides() {
				HTTP.get('slides')
					.then(res => (this.slides = res.data.data))
			},
			isActive(slide) {
				return slide.id === this.isDisplaySlides[0].id
			}
		}
	}
</script>

<style scoped>
	
</style>
