import { Component, OnInit } from '@angular/core';
//import { ChartModule }  from 'angular2-highcharts'; 
import { BaseComponent } from '../psc_shared/psc_base.component';
//declare var moment: any;
import * as moment from 'moment';
import * as _ from "lodash";
import * as highcharts from 'highcharts';
@Component({
  selector: 'app-itest',
  templateUrl: './itest.component.html',
  styleUrls: ['./itest.component.css']
})
export class ItestComponent extends BaseComponent {
  
  options: Object=[];
  bgColors = [];
  colors= ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
    '#f15c80', '#7cb5ec', '#90ed7d', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];
  kpi = ['ร้อยละของเด็กอายุ 0-5 ปี มีพัฒนาการสมวัย', 'ร้อยละของเด็กอายุ 0-5 ปี สูงดีสมส่วน และส่วนสูงเฉลี่ยที่อายุ 5 ปี', 'ร้อยละของเด็กวัยเรียน สูงดีสมส่วน',
  'อัตราการคลอดมีชีพในหญิงอายุ 15-19 ปี',' ร้อยละของผู้ป่วยเบาหวาน ความดันโลหิตสูงที่ขึ้นทะเบียนได้รับการประเมินโอกาสเสี่ยงต่อโรคหัวใจและหลอดเลือด (CVD Risk)','อัตราการเสียชีวิตจากการจมน้ำของเด็กอายุน้อยกว่า 15 ปี ','อัตราผู้ป่วยความดันโลหิตสูงรายใหม่','ร้อยละของผู้ป่วยโรคเบาหวานที่ควบคุมระดับน้ำตาลได้','อัตราตายของผู้ป่วยโรคหลอดเลือดสมอง','ร้อยละของผู้ป่วยนอกได้รับบริการการแพทย์แผนไทยและการแพทย์ทางเลือกที่ได้มาตรฐาน','อัตราตายของผู้ป่วยโรคหลอดเลือดหัวใจ','ร้อยละของผู้ป่วย CKD ที่มีอัตราการลดลงของ eGFR<4 ml/min/1.73m2/yr','อัตราผู้ป่วยเบาหวานรายใหม่','ร้อยละของผู้ป่วยโรคความดันโลหิตสูงที่ควบคุมได้',' ร้อยละเด็ก 6-12 ปี ได้รับบริการทันตกรรม (คน)'
];
  ngOnInit() {
    console.log(this.colors);
    
    for (let i = 0; i < 12; i++) {
      this.options[i] = {
        plotOptions: {
          column: { colorByPoint: true }
        },
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
          '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
        chart: {
          backgroundColor: 'transparent',
          type: 'column',
          style: {
            fontSize: '6pt'
          }
        },
    
        title: {
          text: ''
        },
        labels: {
          enabled: false,
        },

        xAxis: {
        
          categories: ['n', 'c', 'b', 's'],
          labels: {
            enabled: false,
            
           style: {
             color: 'blue',
             fontSize: 8,
             rotation: -45,
             padding: 2, 
            }
          }
        }, spacingBottom: 0, marginBottom: 0,
        yAxis: {
          title: {
            text: ''
          },
          labels: {
            enabled: false
          }
        },
        credits: { enabled: false },
        legend: {
          enabled: false
        },
        subTitle: {
          text: ''
        },
        series: [{
     
          data: [29.9, 71.5, 106.4, 129],
        }]
      };
    }
  }  
}

