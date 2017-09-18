import { Component } from '@angular/core'; // import component to angular/core

// every component need to be commented by the @component
@Component({
  selector: 'app-root', // 组件
  templateUrl: './app.component.html', // 组件模板，定义用户最终看到的内容
  styleUrls: ['./app.component.css'] // 组件模板要用的样式
})
// typescript class： 定义控制器-被component装饰器装饰的typescript类，包含了所有要用的方法
export class AppComponent {
  title = 'app';
}
