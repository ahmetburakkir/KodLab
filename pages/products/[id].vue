<template>
    <div>
        <p>prduct details for{{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo voluptate perspiciatis est. Consequatur ut tempore aperiam dolore vel quia sed in exercitationem! Eaque, voluptates amet nam doloribus dolores eveniet?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    
    definePageMeta({
    layout:'products'
})
</script>

<style scoped>

</style>