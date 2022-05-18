<template>
	<v-container>
		<div class="custom-file">
			<input type="file">
			<!-- <label class="custom-file-label" for="customFile"> 뭐래 </label> -->
		</div>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data: function() {
	return {
			file_name: "파일을 선택하세요.",
			message: "Hello, world",
		};
	},
	computed: {
		...mapState(['userInfo']),
	},
	methods: {
		handleFileChange(e) {
		this.file_name = e.target.files[0].name;
		}
	},
	
	
};
</script>

<style></style>
