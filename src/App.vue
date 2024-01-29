<script setup lang="ts">
import {
  NConfigProvider,
  NNotificationProvider,
  NDialogProvider,
  NMessageProvider,
  NH1,
  darkTheme,
  useOsTheme
} from 'naive-ui'
import { MyLayout, MyHeader, MyFooter } from '@libreservice/my-widget'
import MyPwa from './components/MyPwa.vue'
import { homepage, appName } from '../package.json'

const osThemeRef = useOsTheme()
</script>

<template>
  <my-pwa />
  <n-config-provider :theme="osThemeRef === 'dark' ? darkTheme : null">
    <my-layout>
      <template #header>
        <my-header
          icon="./LibreService.svg"
          :homepage="homepage"
        />
      </template>
      <template #content>
        <div style="cursor: pointer; text-align: center; margin-top: 16px">
          <n-h1>{{ appName }}</n-h1>
          <p>声笔系列码 X（即声笔系列码 10.0）使用 lua 脚本重新设计并实现声笔系列码的各项功能，在 Rime 的各个前端可以直接使用，无需安装声笔定制 Rime。</p>
          <p>目前声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然和声笔小鹤已全部完成，声笔拼音也即将上线。</p>
          <p>为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在声笔官网下载。</p>
        </div>
        <n-notification-provider :max="1">
          <n-dialog-provider>
            <n-message-provider>
              <router-view v-slot="{ Component }">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </router-view>
            </n-message-provider>
          </n-dialog-provider>
        </n-notification-provider>
      </template>
      <template #footer>
        <my-footer
          class="my-footer"
          :homepage="homepage"
          commit="__COMMIT__"
          build-date="__BUILD_DATE__"
          copyright="2024 谭淞宸（基于 Qijia Liu 等的 My Rime 项目）"
        />
      </template>
    </my-layout>
  </n-config-provider>
</template>
