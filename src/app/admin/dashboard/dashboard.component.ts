import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;
  Today:Date;
  CurrentExpenditure:number;
  AvailableFunds:number;
Clients:string[];
Projects:string[];
Years:number[]=[];
TeamMembersSummary=[];
TeamMembers=[];
  constructor() { }

  ngOnInit() {
    this.Designation="Team Leader";
    this.Username="Avinash Konduri";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52;
    this.Today= new Date();
    for(var i=2019; i>=2010;i--){
      this.Years.push(i);
    }
this.Clients=["ABC Infotech Inc","DEF Software Solutions", "GHI Industry"];
this.Projects=["Project A","Project B","Project C","Project D"]

this.TeamMembersSummary=[
  {Region:"East", TeamMembersCount:20, TemporarilyUnavailableMembers:4 },
  {Region:"South",TeamMembersCount:15, TemporarilyUnavailableMembers:8 },
  {Region:"West",TeamMembersCount:17,TemporarilyUnavailableMembers:1},
  {Region:"North",TeamMembersCount:15,TemporarilyUnavailableMembers:6}
];
this.TeamMembers=[
  {
    Region:"East",Members:[
      {ID:1,Name:"Vihaan",Status:"Available"},
      {ID:2,Name:"Pooja",Status:"Available"},
      {ID:3,Name:"Raju",Status:"Busy"},
      {ID:4,Name:"Kiran",Status:"Busy"},
    ]
  },
  {
    Region:"South",Members:[
      {ID:1,Name:"Vijay",Status:"Available"},
      {ID:2,Name:"Chadu",Status:"Busy"},
      {ID:3,Name:"Vinod",Status:"Available"},
      {ID:4,Name:"Eshwar",Status:"Busy"},
    ]
  },
  {
    Region:"West",Members:[
      {ID:1,Name:"Pradeep",Status:"Busy"},
      {ID:2,Name:"Rajesh",Status:"Available"},
      {ID:3,Name:"Santhosh",Status:"Busy"},
      {ID:4,Name:"Latha",Status:"Available"},
    ]
  },
  {
    Region:"North",Members:[
      {ID:1,Name:"Ranjeeth",Status:"Busy"},
      {ID:2,Name:"Sravanthi",Status:"Available"},
      {ID:3,Name:"SriDevi",Status:"Available"},
      {ID:4,Name:"Pallavi",Status:"Available"},
    ]
  }
]

  }
  onProjectChange($event){
  console.log($event.target.innerHTML);
  if($event.target.innerHTML == "Project A"){
    this.ProjectCost = 2113567;
    this.CurrentExpenditure = 96768;
    this.AvailableFunds = 52436;
  }
  if($event.target.innerHTML == "Project B"){
    this.ProjectCost = 88923;
    this.CurrentExpenditure = 22450;
    this.AvailableFunds = 2640;
  }
  if($event.target.innerHTML == "Project C"){
    this.ProjectCost = 662183;
    this.CurrentExpenditure = 7721;
    this.AvailableFunds = 9811;
  }
  if($event.target.innerHTML == "Project D"){
    this.ProjectCost = 928431;
    this.CurrentExpenditure = 562
    this.AvailableFunds = 883;
  }
  }
}
