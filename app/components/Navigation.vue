<template>
  <nav class="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-b-fiserv-orange/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
              src="/images/logo.svg"
              alt="AWSENGERS logo"
              class="size-28 object-contain"
              @error="handleLogoError"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex text-aws-navy items-center gap-2 lg:gap-6 text-sm lg:text-base">
          <NuxtLink
              to="/"
              class="text-aws-navy font-medium  transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            🏠 Home
          </NuxtLink>
          <NuxtLink
              to="/logs"
              class="text-aws-navy font-medium transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            📊 Activity Logs
          </NuxtLink>
          <NuxtLink
              to="/docs"
              class="text-aws-navy font-medium transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            📚 Documentation
          </NuxtLink>
          <a
              href="mailto:quantumleapcrew@gmail.com"
              class="px-4 py-2 bg-fiserv-orange/90 hover:bg-fiserv-orange/80 text-white rounded-lg transition-all font-medium shadow-md"
          >
            📧 Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-gray-200 bg-white"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink
              to="/"
              @click="mobileMenuOpen = false"
              class="text-aws-navy  font-medium transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            🏠 Home
          </NuxtLink>
          <NuxtLink
              to="/logs"
              @click="mobileMenuOpen = false"
              class="text-aws-navy  font-medium transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            📊 Activity Logs
          </NuxtLink>
          <NuxtLink
              to="/docs"
              @click="mobileMenuOpen = false"
              class="text-aws-navy  font-medium transition-colors px-3 py-2 rounded-lg hover:bg-fiserv-orange/40"
              active-class="bg-aws-orange/15"
          >
            📚 Documentation
          </NuxtLink>
          <a
              href="mailto:quantumleapcrew@gmail.com"
              class="text-center px-4 py-2 bg-fiserv-orange/90 hover:bg-fiserv-orange/80 text-white rounded-lg hover:from-aws-navy/90 hover:via-fiserv-blue/90 hover:to-fiserv-orange/90 transition-all font-medium shadow-md"
          >
            📧 Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);

// Close mobile menu when route changes
const route = useRoute();
watch(() => route.path, () => {
  mobileMenuOpen.value = false;
});

// Fallback for logo if image fails to load
const handleLogoError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  // Create a fallback gradient logo
  target.style.display = 'none';
  const parent = target.parentElement;
  if (parent) {
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'w-10 h-10 bg-gradient-to-br from-aws-navy via-fiserv-blue to-fiserv-orange text-white rounded-lg hover:from-aws-navy/90 hover:via-fiserv-blue/90 hover:to-fiserv-orange/90 flex items-center justify-center shadow-lg';
    fallbackDiv.innerHTML = '<span class="text-white font-bold text-xl">⚡</span>';
    parent.insertBefore(fallbackDiv, target);
  }
};
</script>
