import { Component, OnInit } from '@angular/core'; 
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-strategyform',
  templateUrl: './strategyform.component.html',
  styleUrls: ['./strategyform.component.css']
})
export class StrategyformComponent implements OnInit {

  selectedTabIndex: any=1;
  PlannedExpenditureList: any=[];
  ExpFutureInflowsList: any=[];
  EmpStatus: any = 0;
  IncomeDetailsList: any=[];
  LifeStyleAssetsList: any=[];
  InvestmentAssetsList: any=[];
  LiabilitiesAssetsList: any=[];
  AssociatedStructuresList: any=[];
  ProfessionalAdvisersList: any=[];

  PlannedExp: any={
    index: 1,
    Source: '',
    Owner: '',
    Date: '',
    Amount:''
  }

  ExpFutureInflows: any={
    index: 1,
    Source: '',
    Owner: '',
    Date: '',
    Amount:''
  }

  IncomeDetails: any={
    index: 1,
    Source: '',
    Description: '',
    Owner: '',     
    Amount:'',
    Frequency:''
  }

  LifeStyleAssets: any={
    index: 1,     
    Description: '',
    Owner: '',     
    Amount:''     
  }

  InvestmentAssets: any={
    index: 1,     
    Description: '',
    Owner: '',     
    Amount:''     
  }

  LiabilitiesAssets: any={
    index: 1,     
    Description: '',
    Owner: '',     
    Repayment:'',
    Frequency:'',
    Interestrate: '',
    Outstandingbalance: ''    
  }

  AssociatedStructures: any={
    index: 1,     
    Description: '',
    Type: ''    
  }

  ProfessionalAdvisers: any={
    index: 1,     
    AdviceType: '',
    Name: '',
    BusinessName: '',
    Telephone: '' ,
    Email: ''    
  }
 


  

  constructor(appc:AppComponent) { 
    appc.MainmenuIndex=2;
    appc.isUserLoggedIn=true;

  }

  ngOnInit(): void {
    this.PlannedExpenditureList.push(this.PlannedExp);
    this.ExpFutureInflowsList.push(this.ExpFutureInflows);
    this.IncomeDetailsList.push(this.IncomeDetails);
    this.LifeStyleAssetsList.push(this.LifeStyleAssets);
    this.InvestmentAssetsList.push(this.InvestmentAssets);
    this.LiabilitiesAssetsList.push(this.LiabilitiesAssets);
    this.AssociatedStructuresList.push(this.AssociatedStructures);
    this.ProfessionalAdvisersList.push(this.ProfessionalAdvisers);
  }

  AddExpenditure(){
    this.PlannedExpenditureList.push(this.PlannedExp);
  }

  DeleteExpenditure(){
    this.PlannedExpenditureList.pop(this.PlannedExp);
  }


  AddExpFutureInflows(){
    this.ExpFutureInflowsList.push(this.ExpFutureInflows);
  }

  DeleteExpFutureInflows(){
    this.ExpFutureInflowsList.pop(this.ExpFutureInflows);
  }

  AddIncomeDetails(){
    this.IncomeDetailsList.push(this.IncomeDetails);
  }

  DeleteIncomeDetails(){
    this.IncomeDetailsList.pop(this.IncomeDetails);
  }

  AddLifeStyleAssets(){
    this.LifeStyleAssetsList.push(this.LifeStyleAssets);
  }

  DeleteLifeStyleAssets(){
    this.LifeStyleAssetsList.pop(this.LifeStyleAssets);
  }

  AddInvestmentAssets(){
    this.InvestmentAssetsList.push(this.InvestmentAssets);
  }

  DeleteInvestmentAssets(){
    this.InvestmentAssetsList.pop(this.InvestmentAssets);
  }

  AddILiabilitiesAssets(){
    this.LiabilitiesAssetsList.push(this.LiabilitiesAssets);
  }

  DeleteILiabilitiesAssets(){
    this.LiabilitiesAssetsList.pop(this.LiabilitiesAssets);
  }

  AddAssociatedStructures(){
    this.AssociatedStructuresList.push(this.AssociatedStructures);
  }

  DeleteAssociatedStructures(){
    this.AssociatedStructuresList.pop(this.AssociatedStructures);
  }

  AddProfessionalAdvisers(){
    this.ProfessionalAdvisersList.push(this.ProfessionalAdvisers);
  }

  DeleteProfessionalAdvisers(){
    this.ProfessionalAdvisersList.pop(this.ProfessionalAdvisers);
  }


  TabClick(tabindex:any){
    this.selectedTabIndex = tabindex;
  }

}
