<script setup lang="ts">
import { clubs } from '~/utils/mock'
import { useRoute } from 'vue-router'

const config = useRuntimeConfig()
const getImgUrl = (path: string) => `${config.app.baseURL}${path.replace(/^\//, '')}`

const route = useRoute()
const club = clubs.find(c => c.id === route.params.id) || clubs[0]
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <NuxtLink to="/" class="btn-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
        Назад
      </NuxtLink>
      <button class="btn" style="background: white; color: #2D2D2D; border: 1px solid #EAEAEA; font-size: 12px; display: flex; align-items: center; gap: 5px; padding: 8px 15px; border-radius: 6px;">
        На карте <img :src="getImgUrl('/icon-pin.png')" style="width: 14px; opacity: 0.7;" />
      </button>
    </div>

    <h1 style="font-size: 24px; margin-bottom: 20px; color: #2D2D2D;">{{ club.title }}</h1>

    <div style="display: flex; background: white; padding: 20px; border-radius: 8px; gap: 20px; margin-bottom: 20px; border: 1px solid #EAEAEA; border-top: 3px solid #7B2530;">
      <img :src="getImgUrl(club.image)" alt="Фото" style="width: 200px; height: 150px; object-fit: cover; border-radius: 8px;">
      <div style="flex: 1; color: #2D2D2D; font-size: 14px;">
        <span class="badge-outline">Набор открыт</span>
        <p style="margin: 10px 0; display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-user.png')" class="icon-img" /> {{ club.age }}
        </p>
        <p style="margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-pin.png')" class="icon-img" /> {{ club.address }}
        </p>
        <p style="display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-network.png')" class="icon-img" /> {{ club.place }}
        </p>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end;">
        <span class="badge">{{ club.price }}</span>
        <button class="btn">Записаться</button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #EAEAEA; border-top: 3px solid #7B2530;">
      <div>
        <h3 style="color: #7B2530; margin-bottom: 15px; padding-bottom: 10px; text-transform: uppercase; font-size: 16px;">Группы</h3>
        <p style="font-weight: 600; font-size: 14px; color: #2D2D2D; margin-bottom: 10px;">Этап начальной подготовки</p>
        <p style="font-size: 13px; color: #8E8E8E; margin: 8px 0; display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-gradcap.png')" class="icon-img" /> Петрова Елена Александровна
        </p>
        <p style="font-size: 13px; color: #8E8E8E; margin: 8px 0; display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-group.png')" class="icon-img" /> 15 из 20
        </p>
        <p style="font-size: 13px; color: #8E8E8E; margin: 8px 0; display: flex; align-items: center; gap: 8px;">
          <img :src="getImgUrl('/icon-flag.png')" class="icon-img" /> 12 месяцев
        </p>
      </div>
      <div>
        <h3 style="color: #7B2530; margin-bottom: 15px; padding-bottom: 10px; text-transform: uppercase; font-size: 16px;">Расписание занятий</h3>
        <div v-for="(item, index) in club.schedule" :key="index" style="margin-bottom: 10px;">
          <p style="font-size: 14px; margin-bottom: 5px; display: flex; align-items: center; gap: 8px; color: #2D2D2D;">
            <img :src="getImgUrl('/icon-clock.png')" class="icon-img" /> {{ item.days }}
          </p>
          <span class="time-tag">{{ item.time }}</span>
        </div>
      </div>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #EAEAEA; border-top: 3px solid #7B2530;">
      <h3 style="color: #7B2530; margin-bottom: 10px; padding-bottom: 10px; text-transform: uppercase; font-size: 16px;">Описание</h3>
      <p style="font-size: 14px; line-height: 1.6; color: #2D2D2D;">{{ club.description }}</p>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #EAEAEA; border-top: 3px solid #7B2530;">
      <h3 style="color: #7B2530; margin-bottom: 10px; padding-bottom: 10px; text-transform: uppercase; font-size: 16px;">Содержание программы</h3>
      <details v-for="(level, index) in club.program" :key="index" style="margin-top: 15px; cursor: pointer;">
        <summary style="font-weight: 600; color: #7B2530; margin-bottom: 10px; font-size: 15px;">{{ level.title }}</summary>
        <ul style="font-size: 14px; color: #2D2D2D; line-height: 1.8; padding-left: 20px; margin-bottom: 10px;">
          <li v-for="(item, i) in level.items" :key="i">{{ item }}</li>
        </ul>
      </details>
    </div>
  </div>
</template>

<style scoped>
.btn-back { display: inline-flex; align-items: center; gap: 8px; background: white; color: #2D2D2D; padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid #EAEAEA; transition: background 0.2s; }
.btn-back:hover { background: #f9f9f9; }
.badge { background: #E992A1; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; }
.badge-outline { border: 1px solid #E992A1; color: #E992A1; padding: 2px 8px; border-radius: 4px; font-size: 11px; display: inline-block; }
.icon-img { width: 16px; height: 16px; object-fit: contain; opacity: 0.7; }
.time-tag { background: #FCEAB8; color: #333; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-block; margin-left: 24px; }
.btn { background: #7B2530; color: white; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none; font-weight: 500; }
</style>