import { Component, OnInit } from '@angular/core';
import { Userinfo, DynamicGrid } from '../models/userinfo';
 
 

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.css']
})
export class RegistrationStep2Component implements OnInit {

  
  Showtable = false;
  personalInfoComplete = true;
  addressComplete = false;
  creditCardComplete = false;
  completedOrder = false;

  stepOne = false;
  stepTwo = false;
  stepThree = false;

  customer = false;



  customerInformation = [];


  fruite = ['apple','orange'];

  userInfoArray: Userinfo;

  name:string='นางสาว ณัฏฐ์ ลีลาวัฒนานันท์';
  // systemsData = ['ประเทศไทย','ประเทศจีน'];

 systemsData: UsersData[] = [
    {IDnamesys: 1, namesystem: 'ประเทศไทย'},
    {IDnamesys: 2, namesystem: 'ประเทศจีน'},
    {IDnamesys: 3, namesystem: 'ประเทศเวียดนาม'},
    {IDnamesys: 4, namesystem: 'ประเทศลาว'}
  ];

  unitsData: UnitData[] = [
    {Idunit: 1, Nameunit: 'มิลลิกรัม'},
    {Idunit: 2, Nameunit: 'กรัม'},
    {Idunit: 3, Nameunit: 'กิโลกรัม'},
  ];

  itemnumberData: ItemnumberData[] = [
    {IdItemnumber: 1, NameItem: 'กล่อง'},
    {IdItemnumber: 2, NameItem: 'ลัง'},
    {IdItemnumber: 3, NameItem: 'ถุง'},
  ];

  groups=[
    {
      "name": "pencils",
      "items": "red pencil"
    },
    {
      "name": "rubbers",
      "items": "big rubber"
    },
 ];

 dynamicArray: Array<DynamicGrid> = [];  
 newDynamic: any = {};  

  constructor() { }

  ngOnInit(): void {
    console.log('Fruite' + this.fruite.push('banana'));
    console.log(this.fruite);

    this.newDynamic = {title1: "", title2: "",title3:""};  
    this.dynamicArray.push(this.newDynamic);  

  }


  addRow(index) {    
    this.newDynamic = {title1: "", title2: "",title3:""};  
    this.dynamicArray.push(this.newDynamic);  
    // this.toastr.success('New row added successfully', 'New Row');  
    console.log(this.dynamicArray);  
    return true;  
}  


deleteRow(index) {  
  
      this.dynamicArray.splice(index, 1);  
      // this.toastr.warning('Row deleted successfully', 'Delete row');  
      alert(this.dynamicArray);
      return true;  
  }  


  addItem(index) {
    var currentElement = this.groups[index];  
    this.groups.splice(index, 0, currentElement);
  }
  
  personalInfoSubmit() {
    this.personalInfoComplete = false;
    this.addressComplete = true;
    this.stepOne = true;
    this.customer = true;
    this.Showtable = true;

    


    // this.customerInformation.push(this.userInfoArray.name);
    // this.customerInformation.push({
    //   name: this.userInfoArray.name,
    //   email: this.userInfoArray.email
    // });

    // console.log('Your Info ' + this.name.userInfoArray);
  }

  addressSubmit() {
    this.addressComplete = false;
    this.creditCardComplete = true;
    this.stepTwo = true;
  }

  creditCardSubmit() {
    this.creditCardComplete = false;
    this.completedOrder = true;
    this.stepThree = true;
  }

  Testarray: any = {};  
  //dynamicArray: Array<DynamicGrid> = [];  
 datatest = [];
  TestFunction(dynamic:any){
    // alert(this.Testarray);
    
     this.datatest.push(dynamic);
    alert(JSON.stringify(this.datatest));
    // alert(JSON.stringify(dynamic));
   console.log(this.dynamicArray[0].title1);
  }

  
  
}
export interface UsersData {
  namesystem: string;
  IDnamesys: number;
}

export interface UnitData {
  Nameunit: string;
  Idunit: number;
}

export interface ItemnumberData {
  NameItem: string;
  IdItemnumber: number;
}
