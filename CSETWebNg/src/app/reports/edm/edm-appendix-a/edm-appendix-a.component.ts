////////////////////////////////
//
//   Copyright 2021 Battelle Energy Alliance, LLC
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//
////////////////////////////////
import { Component, OnInit, Input } from '@angular/core';
import { EDMBarChartModel } from '../edm-bar-chart.model'


@Component({
  selector: 'edm-appendix-a',
  templateUrl: './edm-appendix-a.component.html',
  styleUrls: ['../../reports.scss']
})
export class EDMAppendixA implements OnInit {

  
  // test data for graph components
  //TODO: Remove once data is avaiable
  horizontal_bar_chart_data: EDMBarChartModel = { 'title':'My test graph', 'green': 14, 'yellow': 10, 'red':9 }
  horizontal_bar_chart_data_two: EDMBarChartModel = { 'title':'My test graph', 'green': 0, 'yellow': 10, 'red':9 }
  horizontal_bar_chart_data_three: EDMBarChartModel = { 'title':'My test graph', 'green': 14, 'yellow': 0, 'red':0 }
  horizontal_bar_chart_data_four: EDMBarChartModel = { 'title':'My test graph', 'green': 0, 'yellow': 0, 'red':0 }
  triple_bar_chart_data: EDMBarChartModel = { 'title':'My triple chart','green': 11, 'yellow': 20, 'red':6, 'unanswered':10 }
  triple_bar_chart_data_two: EDMBarChartModel = { 'title':'My triple chart','green': 20, 'yellow': 0, 'red':0 }


  @Input() framework_data: any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }


}
