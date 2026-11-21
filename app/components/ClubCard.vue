<script setup lang="ts">
defineProps<{ club: any }>()
</script>
<template>
  <div class="card">
    <div class="card-image">
      <img :src="club.image" alt="Фото" />
    </div>
    
    <div class="card-content">
      <div class="card-top">
        <h3 class="card-title">{{ club.title }}</h3>
        <div style="display: flex; gap: 10px; align-items: center;">
          <span v-if="club.firstFree" class="badge-outline">Первое бесплатно</span>
          <span class="badge">
            {{ club.price }}
          </span>
        </div>
      </div>
      
      <p class="card-tag">{{ club.tags[0] }}</p>
      
      <div class="info-row">
        <img src="/icon-user.png" class="icon-img" /> {{ club.age }}
      </div>
      <div class="info-row">
        <img src="/icon-pin.png" class="icon-img" /> {{ club.address }}
      </div>
      <div class="info-row">
        <img src="/icon-network.png" class="icon-img" /> {{ club.place }}
      </div>
      
      <div class="schedule-row">
        <span class="schedule-days">
          <img src="/icon-clock.png" class="icon-img" /> {{ club.schedule[0].days }}
        </span>
        <span class="time-tag">{{ club.schedule[0].time }}</span>
        <span class="time-tag" v-if="club.schedule[1]">{{ club.schedule[1].time }}</span>
        <span class="time-tag" v-if="club.schedule[2]">{{ club.schedule[2].time }}</span>
      </div>
      
      <div class="card-footer">
        <NuxtLink :to="`/clubs/${club.id}`" class="btn">Подробнее</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card { 
  background: white; 
  border-radius: 8px; 
  display: flex; 
  margin-bottom: 15px; 
  border: 1px solid #EAEAEA; /* Серая рамка */
  border-top: 3px solid #7B2530; /* Бордовая полоса сверху */
  overflow: hidden;
}
.card-image { width: 200px; background: #F0F0F0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.card-image img { width: 100%; height: 100%; object-fit: cover; }
.card-content { padding: 20px; flex: 1; position: relative; }
.card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
.card-title { font-size: 15px; font-weight: 600; max-width: 65%; line-height: 1.3; color: #2D2D2D; }
.badge-outline { border: 1px solid #EAEAEA; color: #666; padding: 4px 10px; border-radius: 4px; font-size: 11px; white-space: nowrap; }
.badge { background: #E992A1; color: white; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 500; white-space: nowrap; }
.card-tag { color: #E992A1; font-size: 13px; margin-bottom: 12px; }
.info-row { font-size: 13px; color: #666; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
.icon-img { width: 14px; height: 14px; object-fit: contain; opacity: 0.7; }
.schedule-row { display: flex; gap: 8px; align-items: center; font-size: 13px; margin-top: 15px; flex-wrap: wrap; }
.schedule-days { color: #666; font-weight: 500; display: flex; align-items: center; gap: 5px; }
.time-tag { background: #FCEAB8; color: #333; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; }
.card-footer { display: flex; justify-content: flex-end; margin-top: 15px; }
.btn { background: #7B2530; color: white; padding: 8px 20px; font-size: 13px; border-radius: 6px; border: none; cursor: pointer; }
</style>