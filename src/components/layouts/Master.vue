<template>
	<div id="app">
		<div class="container">
    	<TopMenu/>
    	<Navbar/>
  	</div>
  </div>
</template>

<script>
	import TopMenu from './TopMenu'
	import Navbar from './Navbar'

	export default {
		name: 'master',
		components: {
    	TopMenu,
    	Navbar
  	}
	}
</script>

<style scoped>
	
</style>