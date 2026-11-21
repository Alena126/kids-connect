<script setup lang="ts">
import { clubs } from '~/utils/mock'

const config = useRuntimeConfig()
const getImgUrl = (path: string) => `${config.app.baseURL}${path.replace(/^\//, '')}`

const groupedClubs = clubs.reduce((acc, club) => {
  if (!acc[club.category]) acc[club.category] = []
  acc[club.category].push(club)
  return acc
}, {} as Record<string, any[]>)
</script>

<template>
  <div class="catalog-layout">
    <div class="main-col">
      <div class="search-panel">
        <div class="search-input-wrapper">
          <img :src="getImgUrl('/icon-search.png')" class="search-icon-img" />
          <input type="text" placeholder="Поиск" class="search-input">
        </div>
        <div class="toggle-group">
          <button class="toggle active">Все</button>
          <button class="toggle">Платные</button>
          <button class="toggle">Бесплатные</button>
        </div>
      </div>

      <div v-for="(items, category) in groupedClubs" :key="category" class="category-section">
        <h2 class="category-title">{{ category }}</h2>
        <ClubCard v-for="club in items" :key="club.id" :club="club" />
      </div>
    </div>

    <div class="sidebar-wrapper">
      <div class="filters-top-bar">
        <h2 class="filter-main-title">Фильтры</h2>
        <button class="btn-map">
          На карте <img :src="getImgUrl('/icon-pin.png')" class="pin-icon" />
        </button>
      </div>

      <div class="sidebar-card">
        <!-- ... (остальной код фильтров без изменений, я его сократил для удобства, но в твоем файле он должен остаться) ... -->
        <div class="filter-group">
          <p class="filter-title">Возраст</p>
          <select class="filter-select-flat"><option>Любой</option></select>
        </div>
        <div class="filter-group">
          <p class="filter-title">Пол</p>
          <div class="checkbox-row">
            <label class="custom-checkbox"><input type="checkbox" checked> <span>Мужской</span></label>
            <label class="custom-checkbox"><input type="checkbox" checked> <span>Женский</span></label>
          </div>
        </div>
        <div class="filter-group" style="border-bottom: none; padding-bottom: 0;">
          <p class="filter-title">Каталог</p>
          <div class="catalog-block"><div class="catalog-header"><span>Силовой спорт <span class="count">3</span></span> <span class="arrow">^</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Единоборства <span class="count">2</span></span> <span class="arrow">^</span></div></div>
          <!-- Тут твои остальные категории -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили оставляем как были */
.catalog-layout { display: grid; grid-template-columns: 1fr 320px; gap: 30px; align-items: start; }
.search-panel { display: flex; gap: 15px; margin-bottom: 30px; }
.search-input-wrapper { flex: 1; display: flex; align-items: center; background: white; border-radius: 8px; padding: 0 15px; border: 1px solid #EAEAEA; }
.search-icon-img { width: 16px; height: 16px; object-fit: contain; opacity: 0.5; margin-right: 10px; }
.search-input { width: 100%; padding: 14px 0; border: none; outline: none; font-size: 14px; }
.toggle-group { display: flex; background: white; border-radius: 8px; border: 1px solid #EAEAEA; overflow: hidden; }
.toggle { padding: 0 25px; border: none; background: none; cursor: pointer; font-size: 14px; color: #666; transition: 0.2s; }
.toggle:hover { background: #f9f9f9; }
.toggle.active { background: #7B2530; color: white; }
.category-title { font-size: 20px; margin-bottom: 15px; color: #7B2530; font-weight: 600; }
.sidebar-wrapper { display: flex; flex-direction: column; }
.filters-top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.filter-main-title { font-size: 20px; font-weight: 600; color: #2D2D2D; }
.btn-map { background: white; border: 1px solid #EAEAEA; padding: 8px 15px; border-radius: 6px; font-size: 13px; cursor: pointer; color: #333; display: flex; align-items: center; gap: 8px; }
.pin-icon { width: 14px; opacity: 0.8; }
.sidebar-card { background: white; padding: 25px; border-radius: 8px; border: 1px solid #EAEAEA; border-top: 3px solid #7B2530; }
.filter-group { margin-bottom: 25px; border-bottom: 1px solid #F0F0F0; padding-bottom: 20px; }
.filter-title { font-weight: 600; font-size: 14px; margin-bottom: 12px; color: #2D2D2D; }
.filter-select-flat { width: 100%; padding: 8px 0; border: none; border-bottom: 1px solid #7B2530; background: transparent; color: #666; outline: none; cursor: pointer; font-size: 14px; appearance: auto; }
.checkbox-row { display: flex; gap: 20px; }
.custom-checkbox { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; color: #333; }
.custom-checkbox input { margin: 0; }
.catalog-block { margin-bottom: 8px; }
.catalog-header { display: flex; justify-content: space-between; font-size: 14px; color: #333; cursor: pointer; padding: 4px 0; }
.catalog-header:hover { color: #7B2530; }
.count { color: #CCC; margin-left: 5px; font-size: 12px; }
.arrow { color: #999; font-size: 10px; transform: scaleY(0.7); }
@media (max-width: 1024px) { .catalog-layout { grid-template-columns: 1fr; } }
</style>