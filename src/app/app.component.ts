import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  birthday = new Date(2008, 10, 28);

  test_str = 'Made in China';

  today: Date = new Date();

  test_number = 88;

  test_money = 88.88;

  student = {
    title: '学生成绩',
    name: '张三',
    grade: '3年级',
  };

  message = '1234567890';

  sum: number = 1000;
  args: number = 2;

  // 切换格式
  toggle: boolean = true;

  get format123() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
