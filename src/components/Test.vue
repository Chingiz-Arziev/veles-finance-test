<template>
	<div class="dropdown">
		<div class="dropdown-input" @click="toggleDropdown">
			<input
				v-model="searchQuery"
				@click.stop
				@input="isOpen = true"
				placeholder="Поиск..."
				class="search-input"
			/>
			<i class="arrow-down" :class="{ 'arrow-up': isOpen }"></i>
		</div>
		<ul ref="dropdownList" v-show="isOpen" class="dropdown-list">
			<li
				v-for="item in filteredItems"
				:key="item.id"
				@click="selectItem(item)"
				class="dropdown-item"
			>
				{{ item.label }}
			</li>
			<li v-if="filteredItems.length === 0" class="dropdown-item">
				Ничего не найдено
			</li>
		</ul>
	</div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		const items = [
			{ id: 1, label: 'Элемент 1' },
			{ id: 2, label: 'Элемент 2' },
			{ id: 3, label: 'Элемент 3' },
			{ id: 4, label: 'Элемент 4' }
		];
		const searchQuery = ref('');
		const isOpen = ref(false);
		const selectedItemId = ref('');

		const filteredItems = computed(() => {
			return items.filter(item =>
				item.label.toLowerCase().includes(searchQuery.value.toLowerCase())
			);
		});

		const selectItem = item => {
			console.log('Выбран элемент:', item);
			searchQuery.value = item.label;
			selectedItemId.value = item.id;
			isOpen.value = false;
		};

		const toggleDropdown = () => {
			if (selectedItemId.value) {
				searchQuery.value = '';
				selectedItemId.value = '';
			}
			isOpen.value = !isOpen.value;
		};

		const closeDropdown = event => {
			if (!event.target.closest('.dropdown') && !event.target.closest('.arrow-down')) {
				isOpen.value = false;
			}
		};

		onMounted(() => {
			document.addEventListener('click', closeDropdown);
		});

		onUnmounted(() => {
			document.removeEventListener('click', closeDropdown);
		});

		return {
			searchQuery,
			isOpen,
			filteredItems,
			selectItem,
			toggleDropdown
		};
	}
};
</script>

<style scoped>
.dropdown {
	position: relative;
	display: inline-block;
}

.dropdown-input {
	position: relative;
	cursor: pointer;
}

.search-input {
	padding: 5px;
	width: 200px;
	border: 1px solid #ccc;
}

.arrow-down {
	position: absolute;
	top: 50%;
	right: 5px;
	transform: translateY(-50%);
	border: solid #888;
	border-width: 0 1px 1px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(45deg);
	transition: transform 0.3s;
}

.arrow-up {
	transform: rotate(225deg);
}

.dropdown-list {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
	background-color: #fff;
	list-style-type: none;
	padding: 5px;
	max-height: 200px;
	overflow-y: auto;
}

.dropdown-item {
	cursor: pointer;
	padding: 5px;
}

.dropdown-item:hover {
	background-color: #f5f5f5;
}
</style>


