<template>
  <div class="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
    <div class="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-blue-200 bg-gradient-to-br from-blue-400 to-purple-500">
      <img
          :src="member.image"
          :alt="member.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
      />
    </div>

    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
      <p class="text-blue-600 font-semibold mb-1 text-sm">{{ member.role }}</p>
      <p class="text-gray-500 text-xs mb-3">{{ member.specialization }}</p>
      <p class="text-gray-600 leading-relaxed mb-4 text-sm">{{ member.bio }}</p>

      <!-- Skills -->
      <div class="flex flex-wrap gap-2 justify-center mb-4">
        <span
            v-for="skill in member.skills"
            :key="skill"
            class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
        >
          {{ skill }}
        </span>
      </div>

      <div class="flex gap-3 justify-center">
        <a
            :href="`mailto:${member.email}`"
            target="_blank"
            class="px-3 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200 text-xs font-medium flex items-center gap-2"
        >
          <span>📧</span>
          Email
        </a>
        <a
            :href="`https://github.com/${member.github}`"
            target="_blank"
            class="px-3 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200 text-xs font-medium flex items-center gap-2"
        >
          <span>💻</span>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/types';

interface Props {
  member: TeamMember;
}

defineProps<Props>();

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(target.alt)}&size=256&background=random`;
};
</script>
