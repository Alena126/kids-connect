<script setup lang="ts">
import { clubs } from '~/utils/mock'

const groupedClubs = clubs.reduce((acc, club) => {
  if (!acc[club.category]) acc[club.category] = []
  acc[club.category].push(club)
  return acc
}, {} as Record<string, any[]>)
</script>

<template>
  <div class="catalog-layout">
    
    <!-- Левая часть: Список кружков -->
    <div class="main-col">
      <div class="search-panel">
        <div class="search-input-wrapper">
          <img src="/icon-search.png" class="search-icon-img" />
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

    <!-- Правая часть: Фильтры -->
    <div class="sidebar-wrapper">
      
      <!-- Заголовок и кнопка "На карте" вынесены НАД карточкой -->
      <div class="filters-top-bar">
        <h2 class="filter-main-title">Фильтры</h2>
        <button class="btn-map">
          На карте <img src="/icon-pin.png" class="pin-icon" />
        </button>
      </div>

      <!-- Сама карточка с фильтрами (красная полоска сверху) -->
      <div class="sidebar-card">
        
        <!-- Возраст (стиль как в макете: без рамки, с подчеркиванием) -->
        <div class="filter-group">
          <p class="filter-title">Возраст</p>
          <select class="filter-select-flat">
            <option>Любой</option>
            <option>3-5 лет</option>
            <option>6-9 лет</option>
            <option>10-14 лет</option>
          </select>
        </div>
        
        <!-- Пол (в одну линию) -->
        <div class="filter-group">
          <p class="filter-title">Пол</p>
          <div class="checkbox-row">
            <label class="custom-checkbox"><input type="checkbox" checked> <span>Мужской</span></label>
            <label class="custom-checkbox"><input type="checkbox" checked> <span>Женский</span></label>
          </div>
        </div>

        <!-- Каталог -->
        <div class="filter-group" style="border-bottom: none; padding-bottom: 0;">
          <p class="filter-title">Каталог</p>
          
          <div class="catalog-block">
            <div class="catalog-header"><span>Силовой спорт <span class="count">3</span></span> <span class="arrow">^</span></div>
            <div class="catalog-sub-items">
              <div class="catalog-sub">- Тяжелая атлетика <span class="count">1</span></div>
              <div class="catalog-sub">- Пауэрлифтинг <span class="count">1</span></div>
            </div>
          </div>
          <div class="catalog-block">
            <div class="catalog-header"><span>Единоборства <span class="count">2</span></span> <span class="arrow">^</span></div>
            <div class="catalog-sub-items">
              <div class="catalog-sub">- Вольная борьба <span class="count">1</span></div>
              <div class="catalog-sub">- Дзюдо <span class="count">1</span></div>
            </div>
          </div>
          
          <!-- Остальной список -->
          <div class="catalog-block"><div class="catalog-header"><span>ДПИ и ремесла</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Техническое конструирование</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Словесность</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Иностранные языки</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Развитие интеллекта</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Информационные технологии</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>История и Традиции</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Педагогика</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Музыка и звук</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Пение</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Хореография(танцы)</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Зрелищные искусства</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Мода и стиль</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Познавательные развлечения</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Туризм</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Естественные науки</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Люди и животные</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Эстетические виды спорта</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Технические виды спорта</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Командно-игровой спорт</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Индивидуально-игровой спорт</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Водные виды спорта</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Легкая атлетика и гимнастика</span> <span class="arrow">v</span></div></div>
          <div class="catalog-block"><div class="catalog-header"><span>Физкультура</span> <span class="arrow">v</span></div></div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-layout { display: grid; grid-template-columns: 1fr 320px; gap: 30px; align-items: start; }

/* Левая колонка */
.search-panel { display: flex; gap: 15px; margin-bottom: 30px; }
.search-input-wrapper { flex: 1; display: flex; align-items: center; background: white; border-radius: 8px; padding: 0 15px; border: 1px solid #EAEAEA; }
.search-icon-img { width: 16px; height: 16px; object-fit: contain; opacity: 0.5; margin-right: 10px; }
.search-input { width: 100%; padding: 14px 0; border: none; outline: none; font-size: 14px; }
.toggle-group { display: flex; background: white; border-radius: 8px; border: 1px solid #EAEAEA; overflow: hidden; }
.toggle { padding: 0 25px; border: none; background: none; cursor: pointer; font-size: 14px; color: #666; transition: 0.2s; }
.toggle:hover { background: #f9f9f9; }
.toggle.active { background: #7B2530; color: white; }
.category-title { font-size: 20px; margin-bottom: 15px; color: #7B2530; font-weight: 600; }

/* Правая колонка (Фильтры) */
.sidebar-wrapper { display: flex; flex-direction: column; }

/* Заголовок и кнопка "На карте" */
.filters-top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.filter-main-title { font-size: 20px; font-weight: 600; color: #2D2D2D; }
.btn-map { background: white; border: 1px solid #EAEAEA; padding: 8px 15px; border-radius: 6px; font-size: 13px; cursor: pointer; color: #333; display: flex; align-items: center; gap: 8px; }
.pin-icon { width: 14px; opacity: 0.8; }

/* Сама белая карточка с красной полоской */
.sidebar-card { 
  background: white; 
  padding: 25px; 
  border-radius: 8px; 
  border: 1px solid #EAEAEA; 
  border-top: 3px solid #7B2530; /* Красная полоска только здесь */
}

.filter-group { margin-bottom: 25px; border-bottom: 1px solid #F0F0F0; padding-bottom: 20px; }
.filter-title { font-weight: 600; font-size: 14px; margin-bottom: 12px; color: #2D2D2D; }

/* Стиль инпута возраста (без рамки, с подчеркиванием) */
.filter-select-flat {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #7B2530; /* Красное подчеркивание */
  background: transparent;
  color: #666;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  appearance: auto;
}

/* Галочки в ряд */
.checkbox-row { display: flex; gap: 20px; }
.custom-checkbox { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; color: #333; }
.custom-checkbox input { margin: 0; }

.catalog-block { margin-bottom: 8px; }
.catalog-header { display: flex; justify-content: space-between; font-size: 14px; color: #333; cursor: pointer; padding: 4px 0; }
.catalog-header:hover { color: #7B2530; }
.count { color: #CCC; margin-left: 5px; font-size: 12px; }
.arrow { color: #999; font-size: 10px; transform: scaleY(0.7); }
.catalog-sub-items { margin-top: 5px; margin-bottom: 10px; }
.catalog-sub { font-size: 13px; color: #888; margin-left: 15px; margin-bottom: 5px; cursor: pointer; display: flex; justify-content: space-between; }
.catalog-sub:hover { color: #7B2530; }

@media (max-width: 1024px) { .catalog-layout { grid-template-columns: 1fr; } }
</style>