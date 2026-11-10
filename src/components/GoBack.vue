<template>
    <button @click="goBack">Go Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goBack() {
    if (window.history.state?.back != null) {
        router.back()
    } else {
        router.push('/about')
    }
}
</script>