<template>
	<li @click="$emit('click')" class="v-nav-link">
		<slot></slot>
	</li>
</template>
<script>
</script>
<style lang='scss'>
	@import '../../../styles/_variables.scss';
	.v-nav-link {
		box-sizing: border-box;
		display: inline-block;
		margin: 0 0.8rem;
		border-bottom: solid 3px transparent;
		display: inline-block;
		padding: 2.5rem 1rem calc(3.0rem - 3px) 1rem;
		text-decoration: none;
		@include text-link;
		line-height: 3rem;
		color: $wh-black;
		&:hover {
			cursor: pointer;
		}
		a {
			display: inline-block;
			padding: 2.5rem 1rem calc(2.5rem - 3px) 1rem;
			text-decoration: none;
			@include text-link;
			line-height: 3rem;
			color: $wh-black;
		}
		&.active, &:hover {
			/*border-bottom: solid 3px $vest-sky-blue;*/
			/*box-shadow: 0 2px 4px 0 $dark-sky-blue, 0 1px 1px 0 rgba(0, 0, 0, 0.3);*/
		}
	}

</style>
