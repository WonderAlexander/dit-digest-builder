import Header from '@/components/Email/Rubrics/Header.vue'
import Mos from '@/components/Email/Rubrics/ExternalNews.vue'
import Live from '@/components/Email/Rubrics/InternalNews.vue'
import Services from '@/components/Email/Rubrics/Services.vue'
import Achievements from '@/components/Email/Rubrics/Achievements.vue'
import Events from '@/components/Email/Rubrics/Events.vue'
import Appointments from '@/components/Email/Rubrics/Appointments.vue'
import CityEvents from '@/components/Email/Rubrics/CityEvents.vue'
import Advert from '@/components/Email/Rubrics/Advert.vue'
import type { Component } from 'vue'
import VacancyBanner from '@/components/Email/Rubrics/VacancyBanner.vue'
import CommunityBanner from '@/components/Email/Rubrics/CommunityBanner.vue'
import Community from '@/components/Email/Rubrics/Community.vue'
import Spec from "@/components/Email/Rubrics/Spec.vue";
import Talants from "@/components/Email/Rubrics/Talants.vue";

// Сопоставление названия рубрики и ее компонент email-верстки
const componentMap = {
  Header: Header,
  Mos: Mos,
  Live: Live,
  Achievements: Achievements,
  Spec: Spec,
  Services: Services,
  Talants: Talants,
  Events: Events,
  Appointments: Appointments,
  CityEvents: CityEvents,
  Advert: Advert,
  Community: Community,
  CommunityBanner: CommunityBanner,
  VacancyBanner: VacancyBanner,
}

// Функция возвращает компонент email-верстки в завивисмости от имени рубрики
export const useEmailComponent = (componentName: string): Component | null => {
  return componentMap[componentName as keyof typeof componentMap] || null
}
