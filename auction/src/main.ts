import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // 导入主模块
import { environment } from './environments/environment'; // 导入环境配置

if (environment.production) {
  enableProdMode(); // 生产模式
}

platformBrowserDynamic().bootstrapModule(AppModule) // 传入AppModule启动
  .catch(err => console.log(err));
