<template>
  <div class="grid md:grid-cols-[180px_1fr] gap-5 p-6 border-l-4 rounded-lg mb-4 hover:shadow-md transition-all" :class="logTypeClass">
    <div class="font-semibold text-sm">
      <div :class="typeColorClass" class="mb-2">{{ typeLabel }}</div>
      <div class="text-gray-600">{{ formatDate(log.date) }}</div>
    </div>

    <div>
      <div class="flex flex-wrap justify-between items-start mb-3 gap-2">
        <h4 class="text-lg font-semibold text-gray-800">{{ log.title }}</h4>
        <span v-if="log.hours" class="text-gray-500 text-sm flex items-center gap-1">
          <span>⏱️</span>
          {{ log.hours }}h
        </span>
      </div>

      <p class="text-gray-600 leading-relaxed mb-3">{{ log.description }}</p>

      <!-- Attendees -->
      <div v-if="log.attendees && log.attendees.length > 0" class="mb-3">
        <p class="text-xs font-semibold text-gray-500 mb-1">Attendees:</p>
        <div class="flex flex-wrap gap-2">
          <span
              v-for="attendee in log.attendees"
              :key="attendee"
              class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
          >
            {{ attendee }}
          </span>
        </div>
      </div>

      <!-- Outcomes -->
      <div v-if="log.outcomes && log.outcomes.length > 0" class="mb-3">
        <p class="text-xs font-semibold text-gray-500 mb-1">Outcomes:</p>
        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li v-for="(outcome, idx) in log.outcomes" :key="idx">{{ outcome }}</li>
        </ul>
      </div>

      <!-- Next Steps -->
      <div v-if="log.nextSteps && log.nextSteps.length > 0" class="mb-3">
        <p class="text-xs font-semibold text-gray-500 mb-1">Next Steps:</p>
        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li v-for="(step, idx) in log.nextSteps" :key="idx">{{ step }}</li>
        </ul>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-3">
        <span
            v-for="tag in log.tags"
            :key="tag"
            class="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectLog } from '~/types';

interface Props {
  log: ProjectLog;
}

// defineProps MUST come first, before any other declarations
const props = defineProps<Props>();

// Constants and data come after defineProps
const typeLabels: Record<ProjectLog['type'], string> = {
  meeting: '📅 Meeting',
  development: '💻 Development',
  documentation: '📝 Documentation',
  deployment: '🚀 Deployment',
  testing: '🧪 Testing'
};

const typeClasses: Record<ProjectLog['type'], string> = {
  meeting: 'border-purple-500 bg-purple-50',
  development: 'border-blue-500 bg-blue-50',
  documentation: 'border-green-500 bg-green-50',
  deployment: 'border-orange-500 bg-orange-50',
  testing: 'border-red-500 bg-red-50'
};

const typeColors: Record<ProjectLog['type'], string> = {
  meeting: 'text-purple-600',
  development: 'text-blue-600',
  documentation: 'text-green-600',
  deployment: 'text-orange-600',
  testing: 'text-red-600'
};

// Computed properties come after regular declarations
const logTypeClass = computed(() => typeClasses[props.log.type]);
const typeColorClass = computed(() => typeColors[props.log.type]);
const typeLabel = computed(() => typeLabels[props.log.type]);

// Functions come last
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>
