<template>
    <div class="navigationButton">
        <GearButton v-if="!showMenu"/>
        <CloseButton v-else/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GearButton from '/src/assets/SVG/GearButton/GearButton.vue';
import CloseButton from '/src/assets/SVG/CloseButton/CloseButton.vue'

export default defineComponent({
    name: 'NavigationButton',
    props:{
        showMenu:{
            type: Boolean,
            requiered: true,
        }
    },
    data() {
        return {};
    },
    components: { GearButton, CloseButton }
})
</script>

<style lang="scss" scoped>
.navigationButton{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
</style>