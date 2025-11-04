<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative">
      <BackgroundLogo />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Project Activity Logs</h1>
        <p class="text-xl opacity-90">Complete semester work history - Fall 2025</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <!-- Filters -->
      <div class="bg-white/80 backdrop-blur-md shadow-md rounded-xl border border-blue-100 p-6 mb-8">
        <h3 class="text-lg font-semibold mb-4">Filter by Type</h3>
        <div class="flex flex-wrap gap-3">
          <button
              @click="selectedType = null"
              :class="selectedType === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-4 py-2 rounded-lg font-medium transition-colors"
          >
            All ({{ projectLogs.length }})
          </button>
          <button
              v-for="type in logTypes"
              :key="type.value"
              @click="selectedType = type.value"
              :class="selectedType === type.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {{ type.icon }} {{ type.label }} ({{ getCountByType(type.value) }})
          </button>
        </div>
      </div>

      <!-- Stats Summary -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white/80 backdrop-blur-md shadow-md p-6 rounded-xl text-center border-t-4 border-blue-500">
          <div class="text-3xl font-bold text-blue-600">{{ filteredLogs.length }}</div>
          <div class="text-gray-600 text-sm">Total Activities</div>
        </div>
        <div class="bg-white/80 backdrop-blur-md shadow-md p-6 rounded-xl text-center border-t-4 border-purple-500">
          <div class="text-3xl font-bold text-purple-600">{{ totalFilteredHours }}</div>
          <div class="text-gray-600 text-sm">Total Hours</div>
        </div>
        <div class="bg-white/80 backdrop-blur-md shadow-md p-6 rounded-xl text-center border-t-4 border-green-500">
          <div class="text-3xl font-bold text-green-600">{{ averageHours }}</div>
          <div class="text-gray-600 text-sm">Avg Hours/Task</div>
        </div>
        <div class="bg-white/80 backdrop-blur-md shadow-md p-6 rounded-xl text-center border-t-4 border-orange-500">
          <div class="text-3xl font-bold text-orange-600">{{ dateRange }}</div>
          <div class="text-gray-600 text-sm">Time Span</div>
        </div>
      </div>

      <!-- Logs List -->
      <div class="space-y-4">
        <ProjectLog
            v-for="log in filteredLogs"
            :key="log.id"
            :log="log"
        />
      </div>

      <div v-if="filteredLogs.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">📭</div>
        <p class="text-xl text-gray-600">No logs found for this filter</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectLogs } from '~/data/teamData';
import type { ProjectLog } from '~/types';

const selectedType = ref<ProjectLog['type'] | null>(null);

const logTypes = [
  { value: 'meeting' as const, label: 'Meetings', icon: '📅' },
  { value: 'development' as const, label: 'Development', icon: '💻' },
  { value: 'documentation' as const, label: 'Documentation', icon: '📝' },
  { value: 'deployment' as const, label: 'Deployment', icon: '🚀' },
  { value: 'testing' as const, label: 'Testing', icon: '🧪' }
];

const filteredLogs = computed(() => {
  if (!selectedType.value) return [...projectLogs].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return projectLogs
      .filter(log => log.type === selectedType.value)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const getCountByType = (type: ProjectLog['type']): number => {
  return projectLogs.filter(log => log.type === type).length;
};

const totalFilteredHours = computed(() => {
  return filteredLogs.value.reduce((sum, log) => sum + (log.hours || 0), 0);
});

const averageHours = computed(() => {
  const logsWithHours = filteredLogs.value.filter(log => log.hours);
  if (logsWithHours.length === 0) return '0';
  const avg = logsWithHours.reduce((sum, log) => sum + (log.hours || 0), 0) / logsWithHours.length;
  return avg.toFixed(1);
});

const dateRange = computed(() => {
  if (filteredLogs.value.length === 0) return 'N/A';
  const dates = filteredLogs.value.map(log => new Date(log.date).getTime());
  const daysDiff = Math.ceil((Math.max(...dates) - Math.min(...dates)) / (1000 * 60 * 60 * 24));
  return `${daysDiff} days`;
});
</script>
