<template>
  <div style="background-color: #F4F4F5; min-height: 100vh; padding-top: 20px; padding-bottom: 40px; font-family: 'Inter', sans-serif;">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
      
      <!-- Сама шапка -->
      <header style="background-color: #7B2530; padding: 16px 24px; border-radius: 12px; display: flex; align-items: center; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <NuxtLink to="/" style="color: white; font-size: 24px; font-weight: 600; display: flex; align-items: center; gap: 12px; text-decoration: none;">
  <!-- Вставляем логотип -->
  <img src="/logo.png" alt="KidsConnect" style="height: 40px;" /> 
</NuxtLink>
      </header>
      
      <main>
        <slot />
      </main>

    </div>
  </div>
</template>